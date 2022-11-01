import React from 'react';
import './styles.css';
import { format } from 'timeago.js';

const Job = ({ job, selectedJob }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const selected = job === selectedJob ? 'selectedJob' : '';

    return (
      <div className={`job__result ${selected}`}>
        <img alt="#" src={`${PF}${job.img}`} />
        <div className="job__information">
          <h2>{job.title}</h2>
          <h4>{job.company}</h4>
          <p>{job.location} - {job.type}</p>
          <span>{format(job.createdAt)}</span>
        </div>
      </div>
    );
};

export default Job;
