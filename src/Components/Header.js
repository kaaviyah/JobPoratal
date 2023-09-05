// Header.js
import React from "react";
import "./Header.css";

const Header = ({ onRegisterClick, onLoginClick, showHeadings }) => {
  const handleLoginClick = () => {
    window.location.href = "/login";
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginClick();
  };
  const handleRegClick = () => {
    window.location.href = "/Register";
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    handleRegClick();
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://static.naukimg.com/s/9/135/_next/static/i/NaukriLogoOneTheme.png"
            alt="Naukri Logo"
          />
        </div>
        <nav className="nav">
          <button onClick={handleSubmit1}>Register</button>

          <button onClick={handleSubmit}>Login</button>
        </nav>
      </header>
      {/* <>
    { showHeadings && (
      
    <h1 className='heading'>Find you Dream Job</h1>
    <div className='input-container'>
    <input className='search-input'  placeholder='Search'/>
  
    )}
    </> */}

      <h1 className="job-head">Find Your Dream Company</h1>
    </>
  );
};

export default Header;
