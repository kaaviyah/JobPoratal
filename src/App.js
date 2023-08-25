import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Reg from "./Pages/Reg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  const [showRegisterDetails, setShowRegisterDetails] = useState(false);
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [showHeadings, setShowHeadings] = useState(true);
  const [showMainDetails, setShowMainDetails] = useState(false);
  const handleRegisterClick = () => {
    setShowRegisterDetails(true);
    setShowLoginDetails(false);
    setShowHeadings(false);
    setShowMainDetails(false)
  };
  const handleLoginClick = () => {
    setShowLoginDetails(true);
    setShowRegisterDetails(false);
    setShowHeadings(false);
    setShowMainDetails(false);
  };
  const handleMainClick = () => {
    setShowMainDetails(true);
    setShowRegisterDetails(false);
    setShowHeadings(false);
    setShowLoginDetails(false);

  };

  return (
    <div className="App">
       <Header
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
        // showHeadings={showHeadings}
        onMainClick={handleMainClick}
      /> 
      {/* {showRegisterDetails ? <Register /> : null} */}
   {showRegisterDetails ? <Reg /> : null}
     {showLoginDetails ? <Login /> : null} 
     { showMainDetails ? <MainPage />:null} 
     {/* Rest of your content */}
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={
              // <Header
              //   onRegisterClick={handleRegisterClick}
              
              //   onLoginClick={handleLoginClick}
              //   showHeadings={showHeadings}
             <Login />
            }
          /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Reg />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
