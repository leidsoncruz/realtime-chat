import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { Paths } from '@/constants';
import { AuthService } from '@/services';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await AuthService.authenticate(credentials.username);

        return user ? user : null;
      },
    }),
  ],
  callbacks: {
    redirect: async ({ baseUrl }) => {
      return `${baseUrl}${Paths.Chat}`;
    },
  },
};
