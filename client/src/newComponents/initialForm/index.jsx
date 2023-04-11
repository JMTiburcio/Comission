import React from 'react';
import './styles.css';

const InitialForm = ({ nextPage, jobData, setJobData }) => (
  <section className="createJob__container">
    <div className="createJob__content">
      <h1>Find a greate hire, fast</h1>
      <p>Rated #1 in increasing quality of hire</p>
      <form action="" className="createJob__form">
        <div>
          <div className="createJob__formOption">
            <label htmlFor="">Job title</label>
            <input
              onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
              type="text"
              value={jobData.title}
            />
          </div>
          <div className="createJob__formOption">
            <label htmlFor="">Company</label>
            <input
              onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
              type="text"
              value={jobData.company}
            />
          </div>
          <div className="createJob__formOption">
            <label htmlFor="">Workplace type</label>
            <select
              onChange={(e) => setJobData({ ...jobData, workPlace: e.target.value })}
              value={jobData.workPlace}
            >
              <option value="On site">On site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="createJob__formOption">
            <label htmlFor="">Job location</label>
            <input
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
              type="text"
              value={jobData.location}
            />
          </div>
          <div className="createJob__formOption">
            <label htmlFor="">Job type</label>
            <select
              onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
              value={jobData.type}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="Other">Other</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>
        <button onClick={nextPage} type="button">Get started for free</button>
      </form>
    </div>
  </section>
  );

export default InitialForm;
