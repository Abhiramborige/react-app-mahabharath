import React from 'react';
import "../styles/login.css";

const LogComponent = (props) => {
    const { isLogin, onClickCallback } = props;
    const title = isLogin ? 'Log in your account' : 'Sign up';
    const buttonText = isLogin ? 'Log in' : 'Sign up';
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const _handleClick = () => {
        return onClickCallback(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <div className="registration-pane">
            <h3>{title}</h3>
            <p className="registration-attribute">Username or Email</p>
            <input type="email" ref={emailRef} className="input-login" />
            <p className="registration-attribute">Password</p>
            <input type="password" ref={passwordRef} className="input-login" />
            <button type="button" className="registration-button" onClick={_handleClick}>{buttonText}</button>
        </div>
    )

}

export default LogComponent;