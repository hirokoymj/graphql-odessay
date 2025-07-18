import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';

const client = new ApolloClient({
  uri: 'https://odyssey-lift-off-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <SnackbarProvider>
        <Pages />
      </SnackbarProvider>
    </ApolloProvider>
  </React.StrictMode>
);
