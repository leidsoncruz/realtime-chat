import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { ServerToClientEvents, ClientToServerEvents } from '@/types';


const app = express();
const server = http.createServer(app);
const io = new Server<ServerToClientEvents, ClientToServerEvents>(server);

app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");


  socket.on("message", ({ user, message }) => {
    console.log('sending message', {user, message});
    const _date = Date();
    io.emit("message", { user, message, date: _date });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});