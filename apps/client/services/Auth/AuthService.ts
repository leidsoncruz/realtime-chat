import { User } from 'next-auth';

const WAITING_TIME = 2000;

const authenticate = async (username: string): Promise<User> => {
  const id = Math.floor(Math.random() * 9999999999);
  const image = `https://i.pravatar.cc/300?u=${id}`;

  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: `${id}`,
          name: username,
          email: `${username}@email.com`,
          image,
        }),
      WAITING_TIME
    )
  );
};

export default {
  authenticate,
};
