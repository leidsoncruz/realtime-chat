'use client';

import { PropsWithChildren, createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface Auth {
  isLogged: boolean;
  name: string | null;
  image: string | null;
  login: (name: string) => void;
}

const DEFAULT_VALUE: Auth = {
  isLogged: false,
  name: null,
  image: null,
  login: () => null,
};

export const AuthContext = createContext<Auth>(DEFAULT_VALUE);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useLocalStorage('name', '');
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);
  const [image, setImage] = useLocalStorage('image', '');

  const login = (name: string) => {
    setName(name);
    setIsLogged(true);
    const id = Math.floor(Math.random() * 9999999999);
    setImage(`https://i.pravatar.cc/300?u=${id}`);
  };

  return (
    <AuthContext.Provider
      value={{
        name,
        isLogged,
        image,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
