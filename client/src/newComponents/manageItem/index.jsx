import React from 'react';
import './styles.css';
import { format } from "timeago.js";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ManageItem({ job }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(job)

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
        <MoreHorizIcon style={{fontSize:24}}/>
      </div>
    </div>
  );
}

export default ManageItem;
