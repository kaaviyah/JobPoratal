// RegisterPage.js
import React, { useState, useEffect } from 'react';
import './Register.css';
const Register= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    workStatus: '',
    resume: null,
  });
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    workStatus: '',
    resume: '',
  });
  const [formIsValid, setFormIsValid] = useState(false); // State for overall form validity
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
      if (field === 'workStatus') {
        // Reset related fields when work status changes
        setFormData({
          ...formData,
          experience: '',
          yearOfPassing: '',
          location: '',
          [field]: value,
        });
        validateField(field, value);
      } else {
        validateField(field, value);
      }
  };
  const validateFile = (file) => {
    if (!file) {
      return 'Resume is required';
    }

    const allowedTypes = ['application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a PDF file';
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      return 'File size must be less than 2MB';
    }

    return '';
  };
  const handleFileChange = (event) => {
    const file=event.target.files[0];
    const error=validateFile(file);
    setFormData({
      ...formData,
      resume: event.target.files[0],
    });
    validateField('resume', file, error);
  };
  
  const validateField = (field, value) => {
    const errors = { ...formErrors };
    switch (field) {
        case 'fullName':
          errors.fullName = value.trim() ? '' : 'Full Name is required';
          break;
        case 'email':
          const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
          errors.email = emailPattern.test(value) ? '' : 'Invalid email address';
          break;
          case 'password':
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            errors.password = passwordPattern.test(value) ? '' : 'Password must be at least 8 characters and contain at least one letter and one digit';
            break;
          case 'mobileNumber':
        const mobilePattern = /^[0-9]{10}$/;
        errors.mobileNumber = mobilePattern.test(value) ? '' : 'Invalid mobile number';
        break;
      case 'workStatus':
        errors.workStatus = value ? '' : 'Work Status is required';
        break;
        case 'experience':
            errors.experience = value.trim() ? '' : 'Experience is required';
            break;
      case 'resume':
        errors.resume = value ? '' : 'Resume is required';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = Object.values(formErrors).every((error) => !error);
    if (isFormValid) {
      // Process form data here
      console.log('Form data to be submitted:', formData);

      setFormData({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
        workStatus: '',
        resume: null,
      });
      setFormErrors({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
        workStatus: '',
        resume: '',
      });
    }
  
    };
  

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
    <div className='form'>
      <div className="card2">
        <h3 className='head'>Find a job & grow your career</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label><br/>
            <input className='ip' type="text" value={formData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} />
            {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
          </div>
         
          <div>
            <label>Email</label><br/>
            <input className='ip' type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          <div>
            <label>Password</label><br/>
            <input className='ip'type="password" value={formData.password} onChange={(e) => handleInputChange('password', e.target.value)} />
            {formErrors.password && <p className="error-message">{formErrors.password}</p>}
          </div>
          <div>
            <label>Mobile Number</label> <br/>
            <input className='ip'type="number" value={formData.mobileNumber} onChange={(e) => handleInputChange('mobileNumber', e.target.value)} />
            {formErrors.mobileNumber && <p className="error-message">{formErrors.mobileNumber}</p>}
          </div>
          <div>
            <label >Work Status</label><br/>
            <select className='ip' value={formData.workStatus} onChange={(e) => handleInputChange('workStatus', e.target.value)}>
              <option value="">Select Work Status</option>
              <option value="employed">Employed</option>
              
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
                
            </select>
          
          </div>
          {formErrors.workStatus && <p className="error-message">{formErrors.workStatus}</p>}
                {formData.workStatus === 'employed' && (
        <div>
          <label>Experience</label>
          <input className='ip'
            type="text"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
          />
          {formErrors.experience && <p className="error-message">{formErrors.experience}</p>}
        </div>
      )}
      {formData.workStatus === 'unemployed' && (
        <div>
          <label>Year of Passing</label>
          <input className='ip'
            type="text"
            value={formData.yearOfPassing}
            onChange={(e) => handleInputChange('yearOfPassing', e.target.value)}
          />
          {formErrors.yearOfPassing && <p className="error-message">{formErrors.yearOfPassing}</p>}
        </div>
      )}
       {formData.workStatus === 'student' && (
        <div>
          <label>Location</label>
          <input className='ip'
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
          {formErrors.location && <p className="error-message">{formErrors.location}</p>}
        </div>
      )}

          <div>
            <label>Resume</label><br/>
            <input className='ip' type="file" accept=".pdf"onChange={handleFileChange} />
            {formErrors.resume && <p className="error-message">{formErrors.resume}</p>}
          </div>
          {/* <div className="error-messages">
          {formErrors && Object.keys(formErrors).map((field) => (
            <p key={field} className="error-message">{formErrors[field]}</p>
          ))}
        </div> */}
          <button  type="submit" >Register</button>
        </form>
        </div>
      </div>
      {/* <Card /> */}
     
   
    </div>
    </div>
  );
};



export default Register;
