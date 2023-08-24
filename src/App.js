import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Pages/Login';
import Reg from './Pages/Reg';
import {BrowserRouter as Route, Router} from 'react-router-dom';
import MainPage from './Pages/MainPage';




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
      <Router>
          
                
                <Route path="/login" component={<Login />} />
                <Route path="/Reg" component={<Reg />} />
               
            
        </Router>
   
    </div>
  );
}

export default App;
