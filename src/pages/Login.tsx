import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

export default function Login() {
  const [signedUp] = useState(false);

  return signedUp ? <SignInForm /> : <SignUpForm />;
}
