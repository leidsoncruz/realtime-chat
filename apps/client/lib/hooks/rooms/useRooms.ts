import { useContext } from 'react';

import { RoomContext } from '@/lib';

export const useRooms = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error(
      'This cannot be used outside the RoomContextProvider component'
    );
  }
  return context;
};
