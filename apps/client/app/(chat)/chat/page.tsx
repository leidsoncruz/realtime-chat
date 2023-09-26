'use client';

import styles from './chat.module.css';

import { ChannelBar, ChatBox } from '@/app/components';

export default function Chat() {
  return (
    <main className={styles.wrap}>
      <ChannelBar />
      <ChatBox />
    </main>
  );
}
