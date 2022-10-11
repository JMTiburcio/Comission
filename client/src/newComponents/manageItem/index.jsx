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
          <span className='manageItem__title'>Software Engineer</span>
          <span className='manageItem__company'>Microsoft</span>
          <span className='manageItem__location'>Barueri, São Paulo, Brazil (On-site)</span>
        </div>
        <div className='manageItem__draft'>
          <span className='manageItem__draftTime'>Draft • Created 1mo ago</span>
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
