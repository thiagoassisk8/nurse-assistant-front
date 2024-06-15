import { useRef, useState, useContext } from "react";
import SignUp from "./SignUp";
import Header from "../components/Header";
import useHttp from "../hooks/useHttp";
import UserContext from "../store/UserContext";
import { useNavigate } from "react-router-dom";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp("http://localhost:3000/auth/login", requestConfig);

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

    sendRequest(
      JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      })
    );
  }

  function handleSignUpClick() {
    setShowSignUp(true);
  }

  if (showSignUp) {
    return <SignUp />;
  }

  if (data && !error) {
    userCtx.login(data.token);
    navigate("/protected");
  }

  return (
    <div>
      <Header />
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
            <input
              id="password"
              type="password"
              name="password"
              ref={password}
            />
          </div>
        </div>

        {error && <p>{error}</p>}

        <p className="form-actions">
          <button
            type="button"
            className="button button-flat"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <button type="submit" className="button">
            {isSending ? "Logging in..." : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}
