import { Link } from "react-router-dom";
import "./login.scss";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Do login logic here
    // After login is complete, set isLoading back to false

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/browse";
    }, 3000);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button
            className="loginButton"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading ..." : "Sign In"}
          </button>
          <span>
            New to Netflix?
            <Link to="/register">
              <b> Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
