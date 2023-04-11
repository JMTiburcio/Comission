import { useRef, useEffect, useState } from 'react';
import './styles.css';
import { format } from 'timeago.js';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import JobDropdown from '../jobDropdown';

const ManageItem = ({ job, user, jobData, setJobData, filter }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const itemLink = (option, id) => {
    switch (option) {
      case 'Open':
        return `/myjob/${id}/applicants`;
      case 'Applied':
        return `/job/view/${job._id}`;
      case 'Draft':
        return `/myjob/${job._id}`;
      case 'Closed':
        return `/myjob/${job._id}`;
      default:
        return '';
    }
  };

  const toggleDropdown = open ? '--show' : '';

  return (
    <div className="manageItem">
      <div className="manageItem__imgWrapper">
        <a href={filter === 'Open' ? `/myjob/${job._id}/applicants` : `/myjob/${job._id}`}>
          <img alt="#" className="manageItem__img" src={`${PF}${job.img}`} />
        </a>
      </div>
      <div className="manageItem__content">
        <div className="manageItem__desc">
          <a
            className="manageItem__link"
            href={itemLink(filter, job._id)}
          >
            <span className="manageItem__title">{job.title}</span>
            <span className="manageItem__company">{job.company}</span>
            <span className="manageItem__location">{job.location} ({job.type})</span>
          </a>
        </div>
        
        <div className="manageItem__draft">
          <span className="manageItem__draftTime"><b>{filter}</b> • Created {format(job.createdAt)}</span>
          { filter === 'Draft' && (
            <a className="manageItem__draftLink" href={`/myJob/form/${job._id}`}>Complete draft</a>
          )}
          
          { filter === 'Open' && (
            <span className="manageItem__draftTime">
              <b>{job?.applicants.length}</b> applicant{job?.applicants.length > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {filter !== 'Applied' && (
        <div ref={menuRef} className="manageItem__action">
          <button className="manageItem__button" onClick={() => setOpen(!open)} type="button">
            <MoreHorizIcon style={{ fontSize: 24 }} />
          </button>
          <div className={`manageItem__dropdown${toggleDropdown}`}>
            <JobDropdown filter={filter} job={job} open={open} user={user} jobData={jobData} setJobData={setJobData} />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ManageItem;
