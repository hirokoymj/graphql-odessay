# Odyssey Client-side GraphQL with React & Apollo

Welcome to the companion app of Odyssey Client-side GraphQL with React & Apollo! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/client-side-graphql-react), Apollo's learning platform.

You can [preview the completed demo app here](https://odyssey-catstronauts.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

To get started:

1. Open an IDE at the root of the project.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).

## Hiroko note

- https://www.apollographql.com/tutorials/client-side-graphql-react/09-introducing-mutations

## Codegen

```js
npm install -D @graphql-codegen/cli @graphql-codegen/client-preset

///package.json
"scripts": {
  "test": "vitest",
  "start": "vite",
  "build": "vite build",
  "generate": "graphql-codegen" ///Add
},


//Create codegen.ts file.

codegen.ts
```

```js
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://odyssey-lift-off-server.herokuapp.com/',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true, //optional
};

export default config;
```

```js
npm run generate
```
