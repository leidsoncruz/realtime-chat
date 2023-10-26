import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { ClientContextProvider, RoomContextProvider } from '@/lib';

export const metadata: Metadata = {
  title: 'Chat | NextJS with Web Socket',
  description:
    'Real-Time Collaboration with Next.js: Building Interactive Multi-User Applications',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <ClientContextProvider>
          <RoomContextProvider>{children}</RoomContextProvider>
        </ClientContextProvider>
      </body>
    </html>
  );
}
