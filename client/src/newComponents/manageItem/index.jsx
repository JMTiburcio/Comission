import React, { useRef, useEffect, useState } from 'react';
import './styles.css';
import { axiosInstance } from "../../config";
import { format } from "timeago.js";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';

function ManageItem({ job, user, jobData, setJobData, filter }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }      
    };

    document.addEventListener("mousedown", handler);    
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, {data: {userId:user._id}})
      setJobData([...jobData.filter(e => e._id !== job._id)])
    } catch(err) {
      console.log(err)
    }
  }

  const toggleDropdown = open ? "--show" : ""

  return (
    <div className='manageItem'>
      <div className='manageItem__imgWrapper'>
        <a href={"/myjob/"+job._id}>
          <img className='manageItem__img' src={`${PF}${job.img}`} alt="#" />
        </a>
      </div>
      <div className='manageItem__content'>
        <div className='manageItem__desc'>
          <span className='manageItem__title'>{job.title}</span>
          <span className='manageItem__company'>{job.company}</span>
          <span className='manageItem__location'>{job.location} ({job.type})</span>
        </div>
        {
          filter === "Draft" ? 
          <div className='manageItem__draft'>
            <span className='manageItem__draftTime'><b>Draft</b> • Created {format(job.createdAt)}</span>
            <a className='manageItem__draftLink' href={"/myJob/form/"+job._id}>Complete draft</a>
          </div> :

          filter === "Open" ?
          <div className='manageItem__draft'>
            <span className='manageItem__draftTime'><b>Active</b> • Posted {format(job.createdAt)}</span>
            <span className='manageItem__draftTime'>
              <b>{Object.keys(job).length ? job.applicants.length : ""}</b> applicant(s)
            </span>
          </div> :

          filter === "Close" ?
          <div className='manageItem__draft'>
            <span className='manageItem__draftTime'><b>Closed</b> • Posted {format(job.createdAt)}</span>
          </div>
          : <></>
        }
      </div>
      <div className='manageItem__action' ref={menuRef}>
        <button className="manageItem__button" onClick={() => setOpen(!open)}>
          <MoreHorizIcon style={{fontSize:24}}/>
        </button>

        <div className={`manageItem__dropdown${toggleDropdown}`}>
          <div className="manageItem__dropdownOption" onClick={handleDelete}>
            <DeleteIcon style={{fontSize:24, color:'#5e5e5e', marginRight:5}}/>
            <span>delete draft</span>
          </div>
          <a className='manageItem__link' href={"/myJob/"+job._id}>
            <div className='manageItem__dropdownOption'>
              <WorkIcon style={{fontSize:24, color:'#5e5e5e', marginRight:5}}/>
              <span>manage job</span>
            </div>
          </a>
        </div>
        
        
      </div>
    </div>
  );
}

export default ManageItem;
