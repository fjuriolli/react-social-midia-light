import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

interface FormData {
  username: string;
  password: string;
  confirmation_code: string;
}

export default function SignInForm() {
  const { handleSubmit, register } = useForm<FormData>();
  const [signedIn, setSignedIn] = useState(false);

  const onSubmit = handleSubmit((data: FormData) => {
    if (!signedIn) {
      Auth.signUp({
        username: data.username,
        password: data.password
      })
        .then(() => console.log("signed in"))
        .catch(err => console.log(err));

      Auth.confirmSignIn(data.username, data.confirmation_code).then(() =>
        console.log("confirmed signed in")
      );
      setSignedIn(true);
    }
  });

  return signedIn ? (
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input name="username" ref={register} />
      <label>Confirmation code:</label>
      <input name="confirmation_code" ref={register} />
      <input type="submit" />
    </form>
  ) : (
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input type="text" name="username" ref={register} />
      <label>Password:</label>
      <input type="password" name="password" ref={register} />
      <button type="submit">Sign up</button>
    </form>
  );
}
