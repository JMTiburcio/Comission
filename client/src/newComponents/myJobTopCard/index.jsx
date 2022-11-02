import { useState, useRef, useEffect, useContext } from 'react';
import './styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { AuthContext } from '../../context/AuthContext';
import Job from '../job';
import JobStatus from '../jobStatus';
import JobDropdown from '../jobDropdown';


const MyJobTopCard = ({ job }) => {  
  const { user } = useContext(AuthContext);
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

  return (
    <div className="myJobTopCard">
      {job && (
        <div className="myJobTopCard__info">
          <Job job={job} selectedJob={false}/>
          <JobStatus status={job.status} />
        </div>
      )}
      <div className="myJobTopCard__action" >
        <button className="btnBlue" href={`/myJob/form/${job._id}`}>View Applicants</button>
        <button className="btnWhite" href={`/myJob/form/${job._id}`}>Complete Draft</button>
        <div ref={menuRef}>
          <button className="myJobTopCard__button" onClick={() => setOpen(!open)} type="button">
            <MoreHorizIcon style={{ fontSize: 24 }} />
          </button>
          <JobDropdown filter="Open" job={job} open={open} user={user} />
        </div>
      </div>
    </div>
  );
};

export default MyJobTopCard;
