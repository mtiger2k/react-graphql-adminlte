import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { apolloUploadExpress } from 'apollo-upload-server'
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

require('dotenv').config();

const schema = makeExecutableSchema({ typeDefs, resolvers });
const PORT = process.env.PORT;

const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress({ schema: schema }));
server.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
); // if you want GraphiQL enabled

const ws = createServer(server);

ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: ws,
      path: '/subscriptions'
    }
  );
});
