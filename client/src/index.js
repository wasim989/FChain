import ReactDOM from "react-dom";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { App } from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const Root = () => (
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
);

const app = document.getElementById("app");
ReactDOM.render(<Root />, app);
