import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
   {/* Header */}
      <header className="top-bar">
        <div className="ai-logo">
          <img src="/images/icon.png" alt="AI Icon" className="ai-icon-img" />
          <span className="ai-text">AI Text to Voice</span>
        </div>

        <Link to ="/signin" className="sign-in">
          Sign In
        </Link >
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="center-box">
          <div className="icon">🎙️</div>
          <h1>
            What would you like to do
            <br />
            today?
          </h1>

          <button className="btn btn-primary">Generate AI Voice</button>
          <button className="btn btn-secondary">Manage Account</button>
        </div>
      </main>

     
    </>
  );
}
