import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { ClientContextProvider, RoomContextProvider } from '@/lib';

export const metadata: Metadata = {
  title: 'Chat | NextJS with Web Socket',
  description:
    'Real-Time Collaboration with Next.js: Building Interactive Multi-User Applications',
};

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <ClientContextProvider>
      <RoomContextProvider>{children}</RoomContextProvider>
    </ClientContextProvider>
  );
}
