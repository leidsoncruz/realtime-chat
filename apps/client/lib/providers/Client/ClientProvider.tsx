'use client';

import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

interface Client {
  client: Socket | null;
}

const DEFAULT_VALUE: Client = {
  client: null,
};

export const ClientContext = createContext<Client>(DEFAULT_VALUE);

export const ClientContextProvider = ({ children }: PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const client = io(process.env.NEXT_PUBLIC_APP_SOCKET_SERVER!, {
      transports: ['websocket'],
    });

    setSocket(client);

    return () => {
      setSocket(null);
    };
  }, []);

  return (
    <ClientContext.Provider
      value={{
        client: socket,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
