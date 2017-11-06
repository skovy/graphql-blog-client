import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { ApolloProvider } from 'react-apollo'

import Navigation from 'components/navigation';
import Home from 'pages/home';

const client = new ApolloClient({
  // configure the unique id for each object using the object type and id
  dataIdFromObject: (o: { __typename: string, id: string }) => `${o.__typename}:${o.id}`,
  networkInterface: createNetworkInterface({
    // configure the GraphQL endpoint
    uri: process.env.GRAPHQL_API_URI,
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navigation />
        <Home />
      </div>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
