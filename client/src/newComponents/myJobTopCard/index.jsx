import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import './styles.css';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { axiosInstance } from '../../config';
import { AuthContext } from '../../context/AuthContext';
import Job from '../job';
import JobStatus from '../jobStatus';
// import JobDropdown from '../jobDropdown';


const MyJobTopCard = ({ job }) => {  
  const { user } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, { data: { userId: user._id } });
      navigate('/postedJobs');
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async () => {
    try {
      const isOpen = job.status === 'open';

      isOpen
        ? await axiosInstance.put(`/jobs/${job._id}`, { userId: user._id, status: 'closed' })
        : await axiosInstance.put(`/jobs/${job._id}`, { userId: user._id, status: 'open' });

        window.location.reload();

      } catch (err) {
      console.log(err);
  }
  };

  // const toggleDropdown = open ? '--show' : '';

  return (
    <div className="myJobTopCard">
      { job && (
        <div className="myJobTopCard__info">
          <Job job={job} selectedJob={false}/>
          <JobStatus status={job.status} />
        </div>
      )}

      { job.status === 'open' && (
        <div className="myJobTopCard__options" >
          <a className="btnBlue myJobTopCard__button" href={`/myJob/${job._id}/applicants`}>View Applicants</a>
          <button className="btnWhite myJobTopCard__button" onClick={handleStatus}>Close Job</button>
        </div>
      )}

      { job.status === 'closed' && (
        <div className="myJobTopCard__options" >
          <a className="btnBlue myJobTopCard__button" href={`/myJob/${job._id}/applicants`}>View Applicants</a>
          <button className="btnWhite myJobTopCard__button" onClick={handleStatus}>Repost Job</button>
        </div>
      )}

      { job.status === 'draft' && (
        <div className="myJobTopCard__options" >
          <a className="btnBlue myJobTopCard__button" href={`/myJob/form/${job._id}`}>Complete Draft</a>
          <button className="btnWhite myJobTopCard__button" onClick={handleDelete}>Delete Draft</button>
        </div>
      )}

      {/* DropDown */}
      {/* <div className='myJobTopCard__action' ref={menuRef}>
        <button className="myJobTopCard__button" onClick={() => setOpen(!open)} type="button">
          <MoreHorizIcon style={{ width: 28, height: 24 }} />
        </button>
        <div className={`myJobTopCard__dropdown${toggleDropdown}`}>
          <JobDropdown filter="Open" job={job} user={user} />
        </div>
      </div> */}

    </div>
  );
};

export default MyJobTopCard;
