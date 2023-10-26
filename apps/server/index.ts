import { ClientToServerEvents, Events, ServerToClientEvents } from '@app/types';
import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { cacheManager } from './store';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server);

app.use(cors(), bodyParser.json());

app.get('/api/rooms', (req,res) => {
  const rooms = cacheManager.get('rooms');
  res.json({
    data: rooms ?? []
  });
});

app.post('/api/rooms', (req, res) => {
  try {
    const { name } = req.body;
    const rooms = cacheManager.get('rooms') ?? [];
    const isExisted = rooms.find((room: string) => room === name);
    
    if (!isExisted) {
      const newRooms = [...rooms, name.trim()];
      cacheManager.set('rooms', newRooms);
    }

    res.status(201);
    res.send("created")
  } catch (error) {
    console.log(error)
    res.status(500);
    res.json({
      message: error
    });
  }
})

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on(Events.CreateRoom, (roomName) => {
    console.log(`creating room ${roomName}`);
    const rooms = cacheManager.get('rooms') ?? [];
    const isExisted = rooms.find((room: string) => room === roomName);

    if (!isExisted) {
      const newRooms = [...rooms, roomName];
      cacheManager.set('rooms', newRooms);
    }

    io.emit(Events.ListRoom, cacheManager.get('rooms'));
  });


  socket.on(Events.Message, ({ user, message, room }) => {
    console.log(`sending message to ${room}`, { user, message });
    const _date = Date();
    io.to(room).emit(Events.MessageResponse, { user, message, date: _date });
  });

  socket.on(Events.JoinRoom, (roomName)=> {
    console.log('joining room', roomName);
    socket.join(roomName);
  });
  
  socket.on(Events.LeaveRoom, (roomName) => {
    console.log('leaving room', roomName);
    socket.leave(roomName);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});