'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useAuth } from '@/lib';

import './globals.css';

const ChannelBar = () => {
  const { name, image } = useAuth();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
      </div>
    </div>
  );
};

export default ChannelBar;
