import React, { useState } from 'react';
import './Register.css';
const Reg = ({onLoginClick}) => {
  const initialFormData = {
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    workStatus: '',
    resume: '',
    experience: '', 
    yearOfPassing: '', 
    location: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({}); // Object to hold field error messages
  const isButtonDisabled = Object.values(formData).every((value) => value !== "");
  const buttonColorClass = isButtonDisabled ? "button-dark" : "button-light";
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [field]: '',
    });
  };
  const handleLoginClick = () => {
   
    window.location.href = './login';
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate fields
    const fieldErrors = {};

    if (formData.fullName === '') {
      fieldErrors.fullName = 'Full Name is required';
    }

    if (formData.email === '') {
      fieldErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      fieldErrors.email = 'Invalid email format';
    }

    if (formData.password === '') {
      fieldErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      fieldErrors.password = 'Invalid password format';
    }

    if (formData.mobileNumber === '') {
      fieldErrors.mobileNumber = 'Mobile Number is required';

    }else if(!validateMobile(formData.mobileNumber))
    {
        fieldErrors.mobileNumber='Invaild Mobile Number'
    }

    if (formData.workStatus === '') {
      fieldErrors.workStatus = 'Work Status is required';
    }

    if (formData.resume === '') {
      fieldErrors.resume = 'Resume is required';
    }

 
        if (formData.experience === '') {
          fieldErrors.experience = 'Experience is required';
        }
   
        if (formData.yearOfPassing === '') {
          fieldErrors.yearOfPassing = 'Year of Passing is required';
        }
     
        if (formData.location === '') {
          fieldErrors.location = 'Location is required';
        }
      
    // Check if any errors exist
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
    } else {
      // ... (form submission logic)

      // Reset the form after successful submission
      setFormData(initialFormData);
      setErrors({});
    }
  };
  

  // Helper function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  // Helper function to validate password format
  const validatePassword = (password) => {
    // Add your password validation logic here
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    return passwordRegex.test(password); // Replace with your validation result
  };
  const validateMobile=(mobileNumber)=>
  {
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(mobileNumber);

  }

  return (
    <div className='container'>
    <div className='content'>
    <div className="job-container">
           <div className="card1">
      <div className="image-container">
        <img src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="Profile" className="profile-image" />
      </div>
      <div className="info">
        <h3 className="name">On registering, you can</h3>
        <ul>
         <li className="icon">
         Build your profile and let recruiters find you
        </li>
        <li className="icon">
       Get job postings delivered right to your email
        </li>
        <li className="icon">
       Find a job and grow your career
        </li>
        </ul>
      </div>
    
    </div>
    </div>
    <div className="registration-form">
      <h3>Find a job & grow your career</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
          className='ip'
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
          />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>
        <div>
          <label>Email</label>
          <input className='ip'
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input className='ip'
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div>
          <label>Mobile Number</label>
          <input className='ip'
            type="tel"
            value={formData.mobileNumber}
            onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
          />
          {errors.mobileNumber && <p className="error-message">{errors.mobileNumber}</p>}
        </div>
        <div>
          <label>Work Status</label>
          <select className='ip'
    value={formData.workStatus}
    onChange={(e) => handleInputChange('workStatus', e.target.value)}
  >
    <option value="">Select Work Status</option>
    <option value="employed">Employed</option>
    <option value="unemployed">Unemployed</option>
    <option value="student">Student</option>
  </select>
          {errors.workStatus && <p className="error-message">{errors.workStatus}</p>}
        </div>
       
        <div>
          <label>Experience</label>
          <input className='ip'
            type="text"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
          />
         {errors.experience && <p className="error-message">{errors.experience}</p>}
        </div>
    
        <div>
          <label>Year of Passing</label>
          <input className='ip'
            type="text"
            value={formData.yearOfPassing}
            onChange={(e) => handleInputChange('yearOfPassing', e.target.value)}
          />
         {errors.yearOfPassing && <p className="error-message">{errors.yearOfPassing}</p>}
        </div>
  
        <div>
          <label>Location</label>
          <input className='ip'
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
           {errors.location && <p className="error-message">{errors.location}</p>}
        </div>
        <div>
          <label>Resume</label>
          <input className='ip'
            type="file"
            accept=".pdf"
            onChange={(e) => handleInputChange('resume', e.target.files[0])}
          />
          {
          errors.resume && <p className="error-message">{errors.resume}</p>}
          </div>
       
        <button className={buttonColorClass}
         type="submit" disabled={!isButtonDisabled} 
         >Register</button>
        
      </form>
      <p className='para'>Already Registered? <button className='lbtn' onClick={handleLoginClick}>Login</button>Here</p>
    </div>
    </div>
    </div>
  );
};

export default Reg;
