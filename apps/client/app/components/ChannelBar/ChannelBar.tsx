'use client';

import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

import './globals.css';

const ChannelBar = () => {
  const { data: session } = useSession();

  const name = session?.user?.name;
  const image = session?.user?.image;

  return (
    <div className='channel-wrap'>
      <ul className='channel-list'>
        <li className='active'>Channel chat</li>
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
