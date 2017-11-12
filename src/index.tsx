import { ApolloCache } from "apollo-cache";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Header from "components/header";
import * as config from "config";
import Home from "pages/home";

// Override default styles and provide our defaults
// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    color: ${config.colors.dark};
    font-family: ${config.fonts.secondary};
    font-size: ${config.sizings.base};
    margin: 0;
  }
`;

// Initialize the Apollo Client with the GraphQL API Endpoint URI and in memory
// cache with a unique identifier to be used when normalizing the data in the store
const client = new ApolloClient({
  // configure the GraphQL endpoint
  link: new HttpLink({ uri: process.env.GRAPHQL_API_URI }),
  cache: new InMemoryCache({
    // configure the unique id for each object using the object type and id
    dataIdFromObject: (obj: any) => `${obj.__typename}:${obj.id}`
  }) as ApolloCache<NormalizedCacheObject>
});

const App = () => {
  return (
    // @ts-ignore: remove when types are fixed in react-apollo
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Home />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
