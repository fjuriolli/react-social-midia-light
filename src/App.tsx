import React from "react";
import { ThemeProvider } from "styled-components";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";

Amplify.configure(aws_exports);

const App: React.StatelessComponent<{}> = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes />;
      </div>
    </ThemeProvider>
  );
};

export default App;
