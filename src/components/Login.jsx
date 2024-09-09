import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <p>Sign In</p>
        <p>Please enter your details.</p>
      </div>
      <div className="user-info">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <input type="checkbox" name="" id="" />
        <label>Remember for 30 days</label>
        <p>Forgot password</p>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Login;
