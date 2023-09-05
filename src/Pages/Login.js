// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
// /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
// "[a-zA-Z]+\\.?"
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import './Login.css';
const Login=()=> {
  // const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [ error,setError] = useState("");
  const [success, setSuccess] = useState("");
  // const history = useHistory();
  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const isButtonDisabledLogin = Object.values(input).every((value) => value !== "");
  const buttonColorClassLogin = isButtonDisabledLogin ? "button-dark" : "button-light";
  const handleMainClick = () => {
   
    window.location.href = '/MainPage';
  };
  const handleRegClick = () => {
   
    window.location.href = '/Register';
  };


  const nameValidation = (name) => {
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;
    return nameRegex.test(name);
  };
  const emailValidation = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };
  const passwordValidation = (password) => {
    const passwordRegex =
      /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (e) => {
    setError("");
    setSuccess("");
    if (!nameValidation(input.name)) {
      return setError("Please enter valid Name");
    }
    if (!emailValidation(input.email)) {
      return setError("Please enter valid email id");
    }
    if (!passwordValidation(input.password)) {
      return setError("Please enter vaild Password");
    }
    setSuccess("Login Successfully");
    const username = input.name;
    console.log(username);
    // navigate("/Register", { state: { username: username } });
    // navigate("./Pages/Reg");
    handleMainClick();
    e.preventDefault();

  };
 
  return (
    <div className="register">
      <div className="row">
      <div className="login-card">
        <div className="input-box">
          <h2>Create an account</h2>
          <span>Your Dream job in Your Door  Step!</span>
          {error.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "10px",
                color: "red",
              }}
            >
              {error}
            </div>
          )}
          {success.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "20px",
                color: "green",
              }}
            >
              {success}
            </div>
          )}
          <div className="form">
            <input className="inp"
              onChange={onChange}
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
            />
          </div>
          <div className="form">
            <input className="inp"
              onChange={onChange}
              type="text"
              name="email"
              placeholder="Email"
              value={input.email}
            />
          </div>
          <div className="form">
            <input className="inp"
              onChange={onChange}
              type="password"
              value={input.password}
              name="password"
              placeholder="Password"
            />
          
          <button className={buttonColorClassLogin}
         type="submit" disabled={!isButtonDisabledLogin} onClick={handleSubmit}
         >Login</button>
            </div>
            </div>
          </div>
          <p className='para1'>Already Registered? <button className='lbtn' onClick={handleRegClick}>Register</button>Here</p>
        </div>
      </div>
   
  );
}
export default Login;
