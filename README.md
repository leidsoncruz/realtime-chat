# Real-Time Collaboration with NextJS and Socket.IO

This is the code example of the [article](https://leidson.medium.com/real-time-collaboration-with-nextjs-building-interactive-multi-user-applications-91b5eabd3a05). It uses turbo to manage the monorepo and NextJS to the client side and Express to the server side.

## Using this example

Run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `@app/client`: a [Next.js](https://nextjs.org/) app
- `@app/server`: a [Express.js](https://expressjs.com/) app
- `types`: a type library shared by both `@app/client` and `@app/server` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
