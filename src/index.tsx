import * as React from "react";
import { ApolloClient, createNetworkInterface } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Header from "components/header";
import * as config from "config";
import Home from "pages/home";

const client = new ApolloClient({
  // configure the unique id for each object using the object type and id
  dataIdFromObject: (o: { __typename: string, id: string }) => `${o.__typename}:${o.id}`,
  networkInterface: createNetworkInterface({
    // configure the GraphQL endpoint
    uri: process.env.GRAPHQL_API_URI
  })
});

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    color: ${config.colors.dark};
    font-family: ${config.fonts.secondary};
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
