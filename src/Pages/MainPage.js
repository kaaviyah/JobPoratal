
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css'; // Create this CSS file for styling

const MainPage = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Simulate fetching job data from an API using Axios
    axios.get('https://901522ec-fa4d-4b63-aecc-a237dc24ac90.mock.pstmn.io/jobs/')
      .then(response => {
        setJobData(response.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  return (
    <div className="main">
      <h1>Job Openings</h1>
      <div className="job-cards">
        {jobData.map((job, index) => (
          <div className="job-card" key={index}>
            <img className="company-logo" src={job.imageUrl} alt={`${job.company} Logo`} />
            <div className="job-info">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default MainPage;
