import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | NextJS with Web Socket',
  description:
    'Real-Time Collaboration with Next.js: Building Interactive Multi-User Applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
