import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

interface FormData {
  username: string;
  password: string;
  email: string;
  confirmation_code: string;
  phone_number: string;
}

export default function SignUpForm() {
  const { handleSubmit, register, setValue } = useForm<FormData>({});
  const [signedUp, setSignedUp] = useState(false);

  const onSubmit = handleSubmit((data: FormData) => {
    console.log("data", data);
    if (!signedUp) {
      Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          email: data.email,
          phone_number: data.phone_number
        }
      })
        .then(() => console.log("signed up"))
        .catch(err => console.log(err));
      setSignedUp(true);
      setValue("password", "");
    } else {
      Auth.confirmSignUp(data.username, data.confirmation_code).then(() =>
        console.log("confirmed sign up")
      );
    }
  });

  return signedUp ? (
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
      <input name="username" ref={register} />
      <label>Password:</label>
      <input name="password" ref={register} />
      <label>Email:</label>
      <input name="email" ref={register} />
      <label>Phone number:</label>
      <input name="phone_number" ref={register} />
      <input type="submit" />
    </form>
  );
}
