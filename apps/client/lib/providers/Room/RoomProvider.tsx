'use client';

import { Events } from '@app/types';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ClientContext } from '../Client';

interface IRoomContext {
  active: string;
  list: string[];
  setActive: Dispatch<SetStateAction<string | null>>;
  create: () => void;
}

const DEFAULT_VALUE: IRoomContext = {
  active: 'Channel chat',
  list: [],
  setActive: () => {},
  create: () => {},
};

export const RoomContext = createContext<IRoomContext>(DEFAULT_VALUE);

export const RoomContextProvider = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<IRoomContext['active']>('Channel chat');
  const [list, setList] = useState<IRoomContext['list']>([]);

  const { client } = useContext(ClientContext);

  const create = async () => {
    const id = Math.floor(Math.random() * 100);
    const name = `New room ${id}`;

    client?.emit(Events.CreateRoom, name);

    setActive(name);
  };

  useEffect(() => {
    client?.on(Events.ListRoom, (rooms: string[]) => {
      setList(rooms);
    });

    return () => {
      client?.disconnect();
    };
  }, [client]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_SOCKET_SERVER}/api/rooms`
      );

      const { data } = await response.json();
      setList(data);
    };

    fetchRooms();
  }, []);

  return (
    <RoomContext.Provider
      value={{
        list,
        active,
        setActive,
        create,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
