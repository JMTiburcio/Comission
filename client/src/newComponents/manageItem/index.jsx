import { useRef, useEffect, useState } from 'react';
import './styles.css';
import { format } from 'timeago.js';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import { axiosInstance } from '../../config';

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

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, { data: { userId: user._id } });
      setJobData([...jobData.filter((e) => e._id !== job._id)]);
    } catch (err) {
      console.log(err);
    }
  };

  const itemLink = (option, id) => {
    switch (option) {
      case 'Open':
        return `/myjob/${id}/applicants`;
      case 'Applied':
        return `/job/view/${job._id}`;
      case 'Draft':
        return `/myjob/${job._id}`;
      case 'Close':
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

      {
        (filter === 'Open' || filter === 'Draft') && (
          <div ref={menuRef} className="manageItem__action">
            <button className="manageItem__button" onClick={() => setOpen(!open)} type="button">
              <MoreHorizIcon style={{ fontSize: 24 }} />
            </button>
            <div className={`manageItem__dropdown${toggleDropdown}`}>
              <div className="manageItem__dropdownOption">
                <a className="manageItem__link" onClick={handleDelete}>
                  <DeleteIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                  <span>delete draft</span>
                </a>
              </div>
              <div className="manageItem__dropdownOption">
                <a className="manageItem__link" href={`/myJob/${job._id}`}>
                  <WorkIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                  <span>manage job</span>
                </a>
              </div>
              {
                filter === 'Open' && (
                  <div className="manageItem__dropdownOption">
                    <a className="manageItem__link" href={`/myJob/${job._id}/applicants`}>
                      <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                      <span>applicants</span>
                    </a>
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ManageItem;
