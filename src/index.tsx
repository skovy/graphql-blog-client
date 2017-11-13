import * as React from "react";
import { ApolloClient, createNetworkInterface } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";

import { Header } from "components/header";
import { config } from "config";
import Home from "pages/home";
import Post from "pages/post";

const client = new ApolloClient({
  // configure the unique id for each object using the object type and id
  dataIdFromObject: (o: { __typename: string, id: string }) => `${o.__typename}:${o.id}`,
  networkInterface: createNetworkInterface({
    // configure the GraphQL endpoint
    uri: process.env.GRAPHQL_API_URI
  })
});

// Override the global body styles and add default styles
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
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
