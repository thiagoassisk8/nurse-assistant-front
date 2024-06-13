import { useState } from "react";
import useHttp from "../hooks/useHttp.js";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  const { isLoading: isSending, error, sendRequest } = useHttp();

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }

    setPasswordsAreNotEqual(false);

    // Send the request
    sendRequest("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data["first-name"],
        email: data.email,
        password: data.password,
      }),
    });

    // Optionally handle success or error states
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">Name</label>
          <input type="text" id="first-name" name="first-name" required />
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
  );
}
