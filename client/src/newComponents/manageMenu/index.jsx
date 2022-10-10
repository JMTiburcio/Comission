import React from 'react';
import './styles.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function ManageMenu({ }) {
  return (
    <aside className='manageMenu__aside'>
      <section className='manageMenu'>
          <h2 className='manageMenu__header'><BookmarkIcon/> My items</h2>
          <div className='manageMenu__navItem'>
            <div className='manageMenu__itemSelected'>
              <div className='manageMenu__itemNameSelected'>Posted Jobs</div>
              <div className='manageMenu__itemCountSelected'>1</div>
            </div>
          </div>
          <div className='manageMenu__navItem'>
            <div className='manageMenu__item'>
              <div className='manageMenu__itemName'>My Jobs</div>
              <div className='manageMenu__itemCount'>1</div>
            </div>
          </div>
      </section>
    </aside>
  );
}

export default ManageMenu;
