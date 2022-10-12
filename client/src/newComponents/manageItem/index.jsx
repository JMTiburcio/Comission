import React from 'react';
import './styles.css';
import { axiosInstance } from "../../config";
import { format } from "timeago.js";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';

function ManageItem({ job, user, jobData, setJobData }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, {data: {userId:user._id}})
      const res = await axiosInstance.get(`/jobs/userjobs/${user._id}`) 
      setJobData(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='manageItem'>
      <div className='manageItem__imgWrapper'>
        <img className='manageItem__img' src={`${PF}${job.img}`} alt="#" />
      </div>
      <div className='manageItem__content'>
        <div className='manageItem__desc'>
          <span className='manageItem__title'>{job.title}</span>
          <span className='manageItem__company'>{job.company}</span>
          <span className='manageItem__location'>{job.location} ({job.type})</span>
        </div>
        <div className='manageItem__draft'>
          <span className='manageItem__draftTime'>Draft • Created {format(job.createdAt)}</span>
          <a className='manageItem__draftLink' href="#">Complete draft</a>
        </div>
      </div>
      <div className='manageItem__action'>
        {/* <button className='manageItem__button'>
          <MoreHorizIcon style={{fontSize:24}}/>
        </button> */}
        <button onClick={handleDelete} className='manageItem__button'>
          <DeleteIcon style={{fontSize:24}}/>
        </button>
        <button className='manageItem__button'>
          <WorkIcon style={{fontSize:24}}/>
        </button>
      </div>
    </div>
  );
}

export default ManageItem;
