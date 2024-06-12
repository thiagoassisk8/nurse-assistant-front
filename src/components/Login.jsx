import { useRef, useState } from "react";
import SignUp from "./SignUp";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
  }

  function handleSignUpClick() {
    setShowSignUp(true);
  }

  if (showSignUp) {
    return <SignUp />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div>{emailIsInvalid && <p>Please enter valid value</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
