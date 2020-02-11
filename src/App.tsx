import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";

Amplify.configure(aws_exports);

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App: React.StatelessComponent<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Routes />;
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
