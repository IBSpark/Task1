import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="main">
      {!isSignup && (
        <div className="container">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>Login</button>
          <p className="toggle">
            Don't have an account?
            <span onClick={() => setIsSignup(true)} style={{ cursor: "pointer" }}>
              {" "}Sign up
            </span>
          </p>
        </div>
      )}

      {isSignup && (
        <div className="container">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>Sign Up</button>
          <p className="toggle">
            Already have an account?
            <span onClick={() => setIsSignup(false)} style={{ cursor: "pointer" }}>
              {" "}Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
