import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);

const App: React.FC = () => {
  return <div className="App"></div>;
};

export default withAuthenticator(App, true);
