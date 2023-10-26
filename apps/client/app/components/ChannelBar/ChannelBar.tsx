'use client';

import { Events } from '@app/types';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

import './globals.css';
import { useClient, useRooms } from '@/lib';

const ChannelBar = () => {
  const { data: session } = useSession();
  const { client } = useClient();
  const {
    list: rooms,
    active: activeRoom,
    setActive: setActiveRoom,
    create: createChannel,
  } = useRooms();

  const name = session?.user?.name;
  const image = session?.user?.image;

  const handleRoomClick = (room: string) => {
    if (room === activeRoom) return;

    client?.emit(Events.LeaveRoom, activeRoom);

    setActiveRoom(room);
  };

  return (
    <div className='channel-wrap'>
      <ul className='channel-list'>
        <li>
          <span>Channels</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='24'
            height='24'
            viewBox='0 0 50 50'
            style={{ cursor: 'pointer' }}
            onClick={createChannel}
          >
            <path
              fill='currentColor'
              d='M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z'
            ></path>
          </svg>
        </li>
        {rooms.map((room) => {
          return (
            <li
              key={room}
              className={room === activeRoom ? 'active' : ''}
              onClick={() => handleRoomClick(room)}
            >
              {room}
            </li>
          );
        })}
      </ul>
      <div className='user'>
        <Image
          className='user-photo'
          src={image ?? ''}
          alt={`${name} user profile`}
          height={30}
          width={30}
        />
        <div className='user-name'>{name}</div>
        <svg
          role='image'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          onClick={() => signOut()}
          xmlns='http://www.w3.org/2000/svg'
          style={{
            transform: 'scaleX(-1)',
            cursor: 'pointer',
          }}
        >
          <title>Logout button</title>
          <path
            d='M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z'
            fill='currentColor'
          />
          <path
            d='M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z'
            fill='currentColor'
          />
        </svg>
      </div>
    </div>
  );
};

export default ChannelBar;
