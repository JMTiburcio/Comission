import React from 'react';
import './styles.css';
import CreateIcon from '@mui/icons-material/Create';

function MyJobAside({ }) {
  return (
    <aside className='manageAside'>
      <div className='manageAside__wrapper'>
        <a className='manageAside__post' href="#">
          <CreateIcon style={{fontSize:14, marginRight:5}}/>
          Post a free job
        </a>
        <div className='manageAside__disc'>
          <p>Save up to 35% by purchasing job posting budget in advance.</p>
          <a className='manageAside__discLink' href="#">Get discount</a>
        </div>
        <div className='manageAside__disc'>
          <p>Billing information</p>
          <a className='manageAside__discLink' href="#">Payment method</a>
          <a className='manageAside__discLink' href="#">Purchase history</a>
        </div>
      </div>
    </aside>
  );
}

export default MyJobAside;
