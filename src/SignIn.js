import React, { useState } from "react";
import "./SignIn.css";
import { motion, AnimatePresence } from "framer-motion";

export default function SignIn() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

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

  // Page variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Input/button animation
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="main"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 variants={itemVariants}>{isSignup ? "Sign Up" : "Login"}</motion.h2>

          {isSignup && (
            <motion.input
              type="text"
              placeholder="Full Name"
              className="fade-in"
              variants={itemVariants}
            />
          )}

          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            variants={itemVariants}
          />

          <motion.div className="password-wrapper" variants={itemVariants}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} toggle-password`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </motion.div>

          {error && (
            <motion.p className="error shake" variants={itemVariants}>
              {error}
            </motion.p>
          )}

          <motion.button onClick={handleSubmit} variants={itemVariants}>
            {isSignup ? "Sign Up" : "Login"}
          </motion.button>

          <motion.p className="toggle" variants={itemVariants}>
            {isSignup ? (
              <>
                Already have an account?
                <span
                  className="toggle-link"
                  onClick={() => {
                    setIsSignup(false);
                    setError("");
                  }}
                >
                  {" "}Sign In
                </span>
              </>
            ) : (
              <>
                Don't have an account?
                <span
                  className="toggle-link"
                  onClick={() => {
                    setIsSignup(true);
                    setError("");
                  }}
                >
                  {" "}Sign Up
                </span>
              </>
            )}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
