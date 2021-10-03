import React from "react";
import "../styles/login.css";
import { authenticationProvider } from "../providers";

const LogComponent = (props) => {
  const { isLogin } = props;
  const title = isLogin ? "Log in your account" : "Sign up";
  const buttonText = isLogin ? "Log in" : "Sign up";
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const _handleClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (isLogin) {
      //await authenticationProvider.logIn(email, password);
      await authenticationProvider.refreshToken();
    } else {
      await authenticationProvider.signUp(email, password);
    }

    // TODO: redirect to home page
  };

  return (
    <div className="registration-pane">
      <h3>{title}</h3>
      <p className="registration-attribute">Username or Email</p>
      <input type="email" ref={emailRef} className="input-login" />
      <p className="registration-attribute">Password</p>
      <input type="password" ref={passwordRef} className="input-login" />
      <button
        type="button"
        className="registration-button"
        onClick={_handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LogComponent;
