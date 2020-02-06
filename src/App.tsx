import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import Routes from "./routes/routes";

Amplify.configure(aws_exports);

const App: React.StatelessComponent<{}> = () => <Routes />;

export default App;
// export default withAuthenticator(App, true);
