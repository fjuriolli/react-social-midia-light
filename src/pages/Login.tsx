import React, { useState } from "react";
import { Auth } from "aws-amplify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [signedUp, setSignup] = useState(false);

  function handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!signedUp) {
      Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
          phoneNumber: phoneNumber
        }
      })
        .then(() => console.log("signed up"))
        .catch(err => console.log(err));
      setSignup(true);
    }
    Auth.confirmSignUp(username, confirmationCode);
  }

  return signedUp ? <h1>render signin form</h1> : <h1>render signup form</h1>;
}
