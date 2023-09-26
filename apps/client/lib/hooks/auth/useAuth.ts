import { useContext } from 'react';

import { AuthContext } from '@/lib';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('This cannot be used outside the AuthProvider component');
  }
  return context;
};
