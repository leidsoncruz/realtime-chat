import { Message as MessageProps } from '@app/types';
import moment from 'moment';
import Image from 'next/image';

import './globals.css';

const Message = ({ date, user, message }: MessageProps) => {
  return (
    <div className='message-wrap'>
      <div className='user-photo'>
        <Image
          src={user.image}
          alt={`${user.name} photo profile`}
          width={50}
          height={50}
        />
      </div>
      <div className='message'>
        <div className='message-info'>
          <p>{user.name}</p>
          <p>{moment(date).format('h:mm a')}</p>
        </div>
        <div className='message-content'>{message}</div>
      </div>
    </div>
  );
};

export default Message;
