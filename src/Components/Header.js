// Header.js
import React from 'react';
import './Header.css';



const Header = ({onRegisterClick, onLoginClick, showHeadings}) => {
 
  return (
   <>
    <header className="header">
      <div className="logo">
        <img src="https://static.naukimg.com/s/9/135/_next/static/i/NaukriLogoOneTheme.png" alt="Naukri Logo" />
      </div>
      <nav className="nav">
       
      <button onClick={onRegisterClick}>Register</button>
     
        <button onClick={onLoginClick} >Login</button>
      </nav>
    </header>
{/* <>
    { showHeadings && (
      
    <h1 className='heading'>Find you Dream Job</h1>
    <div className='input-container'>
    <input className='search-input'  placeholder='Search'/>
  
    )}
    </> */}



    </>
  );
};

export default Header;
