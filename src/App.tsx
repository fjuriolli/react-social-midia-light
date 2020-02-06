import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

Amplify.configure(aws_exports);

const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes />;
    </div>
  );
};

export default App;
