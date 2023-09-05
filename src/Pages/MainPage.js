import React from "react";
import JobCard from "./JobCard";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div>
      <div className="container1">
        <div className="content1">
          <div className="job-container1">
            <div className="card-main">
              <h2 className="card-head">Hiring Process</h2>
              <ul>
                <li className="list">
                  <p>
                    <strong>Personal Research</strong>
                  </p>
                </li>
                <li className="list">
                  <p>
                    <strong>Headhunting</strong>
                  </p>
                </li>
                <li className="list">
                  <p>
                    <strong>Job Interview</strong>
                  </p>
                </li>
                <li className="list">
                  <p>
                    <strong>Employee Info</strong>
                  </p>
                </li>
                <li className="list">
                  <p>
                    <strong>Recruitment</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mainform">
            <div className="job-form">
              <h3>Hit Apply Button, Get your Dream Job</h3>
            </div>
          </div>
          <div className="mainform1">
            <div className="job-form2">
              <JobCard
                company="Amazon"
                position="Software Engineer Position"
                description=" We are seeking a skilled Software Engineer to join our talented development team. As a Software Engineer, you will be responsible for designing, developing, testing, and maintaining software applications that meet the needs of our clients and users. You will collaborate with cross-functional teams to deliver high-quality solutions that drive business growth,"
                experience=" Bachelor's degree in Computer Science, Engineering, or a related field (Master's degree preferred) 0-1 years of experience as a Software Engineer or related role."
                skills=" Proficiency in [programming languages, e.g., Java, Python, C++] and [relevant technologies]. Strong understanding of [specific areas of expertise, e.g., web development, database design].Experience with [version control systems, testing frameworks, etc.].Problem-solving skills and attention to detail.Excellent communication and teamwork abilities."
              />
            </div>
          </div>
          <div className="mainform2">
            <div className="job-form3">
              <JobCard
                company=" TechX Innovations"
                position=" Digital Marketing Specialist"
                description=" Develop and implement digital marketing campaigns, manage social media accounts, analyze web traffic data, and collaborate with the content team to create engaging online content"
                experience="  Bachelor's degree in Marketing or related field, 3+ years of experience in digital marketing, proficiency in SEO and SEM, strong analytical skills, and familiarity with marketing tools like Google Analytics and HubSpot"
                skills="SEO, SEM"
              />
            </div>
          </div>
          <div className="mainform3">
            <div className="job-form4">
              <JobCard
                company="CodeCraft Solutions"
                position="Software Engineer - Full Stack "
                description=" Design and develop software solutions, collaborate with cross-functional teams, troubleshoot and debug code, participate in code reviews, and contribute to the entire software development lifecycle."
                experience=" Bachelor's degree in Computer Science or related field, 5+ years of experience in software development, proficiency in JavaScript, Python, and relevant frameworks (e.g., React, Django), strong problem-solving skills, and experience with version control systems (e.g., Git)."
                skills=" JavaScript, Python"
              />
            </div>
          </div>
          <div className="job-form1">
            <h4>LinkedIn News</h4>
            <ul>
              <li>
                <p>
                  <strong>India makes historic Moon landing</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Festive season fuels hiring</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Cafes battle rising bean prices</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>SBI Life of hire thousands</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Banks records spending surge</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
