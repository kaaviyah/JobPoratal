import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const [showRegisterDetails, setShowRegisterDetails] = useState(false);
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [showHeadings, setShowHeadings] = useState(true);
  const handleRegisterClick = () => {
    setShowRegisterDetails(true);
    setShowLoginDetails(false);
    setShowHeadings(false);
  };
  const handleLoginClick = () => {
    setShowLoginDetails(true);
    setShowRegisterDetails(false);
    setShowHeadings(false);
  };
  return (
    <div className="App">
     <Header
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
        showHeadings={showHeadings}
      />
      {showRegisterDetails ? <Register /> : null}
      {showLoginDetails ? <Login/> : null}
      {/* Rest of your content */}
    </div>
  );
}

export default App;
