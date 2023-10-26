# @app/client

This is a [Next.js](https://nextjs.org/) application responsible for performing actions on the client side of the real-time chat application. This application is an example of the Real-Time Collaboration with NextJS: Building Interactive Multi-User Applications article.

## Running


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can perform the login by going to `/login` route and then you are redirected to the `/chat` route.

As it uses local storage to store the user, you need to open different browsers or open a normal tab and an incognito tab to see the magic happening.

Since messages aren't persistent, each page refresh or channel change will clear chat messages. To have a message history, you need to persist them somewhere.


This project uses:
- [`moment`](https://momentjs.com/) to have a friendly date format without the need to do it manually.
- [socket.io-client](https://socket.io/docs/v4/client-installation/) the client to enable the communication between the client and server.
- [next-auth](https://next-auth.js.org/) the solution for the application authentication.
