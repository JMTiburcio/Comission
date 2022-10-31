import './styles.css';
import { format } from 'timeago.js';

import JobStatus from '../jobStatus';

const JobInfo = ({ job }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className="JobInfo">
      <img alt="company_img" className="manageItem__img" src={`${PF}${job.img}`} />
      <h2>{job.title}</h2>
      <h4>
        {job.location}  -  {format(job.createdAt)} -  {job.applicants.length} applicant{job.applicants.length !== 1 ? 's' : ''}
      </h4>
      <ul>
        <li><span>{job.type}</span></li>
        <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
        <li><span>See recent hiring trends on <b>{job.company}</b></span></li>
        <li><JobStatus status={job.status} /></li>
      </ul>
    </div>
);
};

export default JobInfo;
