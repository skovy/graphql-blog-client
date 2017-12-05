import * as React from "react";
import { ApolloClient, createNetworkInterface } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";

import { Header } from "components/header";
import { config } from "config";
import { Home } from "containers/home";
import { PostShow } from "containers/post/show";
import { Write } from "containers/write";
import { customResolvers } from "custom-resolvers";
import { dataIdFromObject } from "utils";

// Include the default styles for the Draftjs editor
import "draft-js/dist/Draft.css";

const client = new ApolloClient({
  customResolvers,
  dataIdFromObject,
  networkInterface: createNetworkInterface({
    // Configure the GraphQL endpoint
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

// Setup the root of the application, Apollo client provider, routing, etc
const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/write" component={Write} />
            <Route path="/posts/:id" component={PostShow} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
