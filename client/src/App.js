import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './routes'
import createApolloClient from './createApolloClient'

const apolloClient = createApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <div>
            <MainRoutes />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
