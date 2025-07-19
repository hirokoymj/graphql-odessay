# Client-side GraphQL Demo with React & Apollo

- **Tutorial**: https://odyssey.apollographql.com/client-side-graphql-react
- **GraphQL endpoint**: https://odyssey-lift-off-server.herokuapp.com/
- **Sandbox**: https://studio.apollographql.com/sandbox/explorer

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

touch codegen.ts
```

**codegen.ts**

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

## Deploy Heroku

```js
//1. Install serve
npm install --save serve

//2. Add a start script that uses serve to serve the built dist folder.
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "start": "serve -s dist" ## Add serve
},

//3. Create a Procfile
touch Procfile
web: npm run start

//4. Deploy to Heroku.
heroku login
git push origin main
heroku login
heroku git:clone -a graph-odyssey
git add .
$ git commit -am "make it better"
$ git push heroku main
```

## useQuery vs useMutation

```js
const { d, l, e } = useQuery(GraphQL, options);
const [mutateFunction, { d, l, e }] = useMutation(GraphQL, options);
```

- `useQuery` returns an **object**, `useMutation` returns **array**.
- `useQuery` runs automatically, `useMutations` runs by a user action to trigger mutate function.
