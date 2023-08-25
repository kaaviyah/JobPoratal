import React from 'react';
import './JobCard.css';
import { useState } from 'react';
import companyImage from '../Images/Amazon.jpg'
function JobCard({ company, image, description,position,experience,skills }) {
    const [applied, setApplied] = useState(false);

    const handleApplyClick = () => {
        setApplied(true);
    };

    return (
        <div className="job-opening-card">
            <div className="card-header">
                <h2>{company}</h2>
            </div>
            {/* <div className="card-image">
                <img src={companyImage} alt={company} />
               
            </div> */}
              <div className="card-position">
                <p><strong>Position:</strong>{position}</p>
            </div>
            <div className='description'>
            <div className="card-description">
            <p><strong>Description:</strong>{description}</p>
                <p><strong>Experience Required:</strong> {experience}</p>
                <p><strong>Skills Required:</strong> {skills}</p>
            </div>
            </div>
           <button 
            className={`apply-button ${applied ? 'applied' : ''}`}
           onClick={handleApplyClick} disabled={applied}>
                    {applied ? 'Applied' : 'Apply'}
                </button>
        </div>
    );
}

export default JobCard;
