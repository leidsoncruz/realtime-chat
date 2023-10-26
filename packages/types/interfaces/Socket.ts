import { Message, MessageDTO } from '.';
import { Events } from '../enums';

export interface ServerToClientEvents {
  [Events.MessageResponse]: (params: Message) => void;
  [Events.ListRoom]: (rooms: string[]) => void;
}

export interface ClientToServerEvents {
  [Events.Message]: (params: MessageDTO) => void;
  [Events.JoinRoom]: (roomName: string) => void;
  [Events.LeaveRoom]: (roomName: string) => void;
  [Events.CreateRoom]: (roomName: string, callback: any) => void;
}
