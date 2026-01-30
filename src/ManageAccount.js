import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ManageAccount.css";

export default function ManageAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    setMessage("");
    setError("");

    if (!name || !email) {
      setError("Name and email cannot be empty");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (newPassword && newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }

    setMessage("Account updated successfully ✅");

    setOldPassword("");
    setNewPassword("");
    setShowOldPassword(false);
    setShowNewPassword(false);
  };

  return (
    <motion.div
      className="manage-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="manage-container">
        <h2>Manage Account</h2>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Old Password:</label>
        <div className="password-wrapper">
          <input
            type={showOldPassword ? "text" : "password"}
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
          <i
            className={`bi ${
              showOldPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
            } toggle-password`}
            onClick={() => setShowOldPassword(!showOldPassword)}
          ></i>
        </div>

        <label>New Password:</label>
        <div className="password-wrapper">
          <input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <i
            className={`bi ${
              showNewPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
            } toggle-password`}
            onClick={() => setShowNewPassword(!showNewPassword)}
          ></i>
        </div>

        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}

        <button className="btn-update" onClick={handleUpdate}>
          Update Account
        </button>

        <p className="back-home">
          <Link to="/">← Back to Home</Link>
        </p>
      </div>
    </motion.div>
  );
}
