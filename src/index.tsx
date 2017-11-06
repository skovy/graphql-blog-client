import * as React from "react";
import { ApolloClient, createNetworkInterface } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Header from "components/header";
import Home from "pages/home";
import * as config from "config";

const client = new ApolloClient({
  // configure the unique id for each object using the object type and id
  dataIdFromObject: (o: { __typename: string, id: string }) => `${o.__typename}:${o.id}`,
  networkInterface: createNetworkInterface({
    // configure the GraphQL endpoint
    uri: process.env.GRAPHQL_API_URI,
  }),
});

injectGlobal`
  body {
    color: ${config.colors.dark};
    font-family: 'Roboto Slab', serif;
    font-size: ${config.sizings.base};
    margin: 0;
  }
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Home />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
