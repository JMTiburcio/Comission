import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function ManageMenu({ page }) {
  return (
    <aside className='manageMenu__aside'>
      <section className='manageMenu'>
          <h2 className='manageMenu__header'><BookmarkIcon/> My items</h2>
          <Link to="/postedJobs" style={{textDecoration:"none"}}>
            <div className='manageMenu__navItem'>
              <div className={'manageMenu__item'+ (page === 'postedJob' ? 'Selected' : '')}>
                <div className={'manageMenu__itemName'+ (page === 'postedJob' ? 'Selected' : '')}>
                  Posted Jobs
                </div>
                <div className={'manageMenu__itemCount'+ (page === 'postedJob' ? 'Selected' : '')}>
                  1
                </div>
              </div>
            </div>
          </Link>
          <Link to="/savedJobs" style={{textDecoration:"none"}}>
            <div className='manageMenu__navItem'>
              <div className={'manageMenu__item'+ (page === 'savedJob' ? 'Selected' : '')}>
                <div className={'manageMenu__itemName'+ (page === 'savedJob' ? 'Selected' : '')}>
                  My Jobs
                </div>
                <div className={'manageMenu__itemCount'+ (page === 'savedJob' ? 'Selected' : '')}>
                  1
                </div>
              </div>
            </div>
          </Link>
      </section>
    </aside>
  );
}

export default ManageMenu;
