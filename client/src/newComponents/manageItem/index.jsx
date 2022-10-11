import React from 'react';
import './styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ManageItem({ }) {
  return (
    <div className='manageItem'>
      <div className='manageItem__imgWrapper'>
        <img className='manageItem__img' src="\assets\job.png" alt="#" />
      </div>
      <div className='manageItem__content'>
        <div className='manageItem__desc'>
          <span className='manageItem__title'>Job Title</span>
          <span className='manageItem__company'>Company</span>
          <span className='manageItem__location'>Location, Type</span>
        </div>
        <div className='manageItem__draft'>
          <span className='manageItem__draftTime'>Draft . Created Time</span>
          <a className='manageItem__draftLink' href="#">Complete draft</a>
        </div>
      </div>
      <div className='manageItem__action'>
        <MoreHorizIcon/>
      </div>
    </div>
  );
}

export default ManageItem;
