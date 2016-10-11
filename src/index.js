import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// By default, this client will send queries to the
//  `/graphql` endpoint on the same host
const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.scaphold.io/graphql/dentonmonitor'),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
