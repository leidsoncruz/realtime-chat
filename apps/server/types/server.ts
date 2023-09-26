import { MessageDTO, Message } from '@app/types';

export interface ServerToClientEvents {
  message: (params: MessageDTO) => void;
}

export interface ClientToServerEvents {
  message: (params: Message) => void;
}
