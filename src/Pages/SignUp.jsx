import React, { useState } from "react";
import useHttp from "../hooks/useSignUpHttp.js";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const { isLoading: isSending, error, sendRequest } = useHttp();
  const navigate = useNavigate();
  const apiUrl = "https://nurse-assistant.onrender.com";
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsAreNotEqual(true);
      return;
    }

    setPasswordsAreNotEqual(false);

    const requestData = {
      name,
      email,
      password,
    };
    const handleSignupSuccess = () => {
      console.log("Signup successful!");
      window.location.reload();
    };

    sendRequest(
      {
        url: `${apiUrl}/users/register`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestData,
      },
      handleSignupSuccess
    );
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="control-error">
              {passwordsAreNotEqual && <p>Passwords must match</p>}
            </div>
          </div>

          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              name="terms"
              required
            />
            I agree to the terms and conditions
          </label>
        </div>
        {error && <p>{error}</p>}

        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            {isSending ? "Signing up..." : "Sign up"}
          </button>
        </p>
      </form>
    </div>
  );
}
