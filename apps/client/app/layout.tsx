import { getServerSession } from 'next-auth';
import { PropsWithChildren } from 'react';

import { AuthProvider } from '@/lib';
import { authOptions } from '@/services';

import './globals.css';

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <body>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
