import { Message, MessageDTO } from '.';

export interface ServerToClientEvents {
  message: (params: MessageDTO) => void;
}

export interface ClientToServerEvents {
  message: (params: Message) => void;
}
