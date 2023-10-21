'use client';

import { Message } from '@app/types';
import { useSession } from 'next-auth/react';
import { FormEvent, useEffect, useRef, useState } from 'react';

import './globals.css';

import { Message as MessageComponent } from '../Message';

import { FormElement } from './types';

import { useChatScroll, useClient } from '@/lib';

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const inputMessageRef = useRef<HTMLInputElement>(null);

  const { data: session } = useSession();

  const name = session?.user?.name;
  const image = session?.user?.image;

  const { client } = useClient();
  const chatRef = useChatScroll([]);

  useEffect(() => {
    client?.on('message', (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      client?.disconnect();
    };
  }, [client]);

  const handleSubmit = (event: FormEvent<FormElement>) => {
    event.preventDefault();
    client?.emit('message', {
      user: {
        name,
        image,
      },
      message: event.currentTarget.elements.message.value,
    });
    if (inputMessageRef.current) inputMessageRef.current.value = '';
  };

  return (
    <section className='chat-wrap'>
      <div className='conversation-area' ref={chatRef}>
        {messages.map(({ date, user, message }, idx) => (
          <MessageComponent
            key={idx}
            date={date}
            user={user}
            message={message}
          />
        ))}
      </div>
      <form className='message-box' onSubmit={handleSubmit}>
        <input type='text' name='message' ref={inputMessageRef} />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ChatBox;
