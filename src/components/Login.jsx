import React, { useState } from "react";
import Signup from "./SignUp";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  if (isSignUp) {
    return <Signup />;
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={() => setIsSignUp(true)}
        >
          Don't have an account?
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
