import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Proper email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (value) => {
    setEmail(value);

    if (!emailRegex.test(value)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert(isSignup ? "Sign Up Successful " : "Login Successful ");
  };

  return (
    <div className="main">
      <div className="container">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        {isSignup && (
          <input type="text" placeholder="Full Name" className="fade-in" />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />

        {/* Password */}
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <i
            className={`bi ${
              showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
            } toggle-password`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>

        {error && <p className="error shake">{error}</p>}

        <button onClick={handleSubmit}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
            <p className="toggle">
  Don't have an account?
  <span
    className="toggle-link"
    onClick={() => {
      setIsSignup(true);
      setError("");
    }}
  >
    {" "}Sign up
  </span>
</p>
       
      </div>
    </div>
  );
}
