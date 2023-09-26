import { PropsWithChildren } from 'react';

import { AuthContextProvider } from '@/lib';

import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
