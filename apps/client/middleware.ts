import { withAuth } from 'next-auth/middleware';

import { Paths } from './constants';

const PROTECTED_ROUTES = [Paths.Chat];

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const currentPath = req.nextUrl.pathname as Paths;

      if (PROTECTED_ROUTES.includes(currentPath) && token === null) {
        return false;
      }
      return true;
    },
  },
});
