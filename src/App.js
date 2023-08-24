import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Pages/Login';
import Reg from './Pages/Reg';
import { Route, Router,Routes } from 'react-router-dom';

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
      {/* {showRegisterDetails ? <Register /> : null} */}
      {showRegisterDetails ? <Reg /> : null}
      {showLoginDetails ? <Login/> : null}
      {/* Rest of your content */}
      {/* <div>
      <Router>
        <Routes>
         
          <Route path="/Reg" element={<Reg />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
      </div> */}
    </div>
  );
}

export default App;
