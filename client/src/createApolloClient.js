import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { toIdValue } from 'apollo-utilities';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client/lib/main';
import { getMainDefinition } from 'apollo-utilities';

import config from './config'

export default () => {

const serverPort = `${config.api_host}:${config.api_port}`
function dataIdFromObject(result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
}

const cache = new InMemoryCache({
  dataIdFromObject
});

// Create an http link:
const httpLink = createUploadLink({
  uri: `http://${serverPort}/graphql`
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://${serverPort}/subscriptions`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache
});

return client;
}