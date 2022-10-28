import React from 'react';
import './styles.css';
import CreateIcon from '@mui/icons-material/Create';

const MyJobAside = ({ job }) => (
  <aside className="myJobAside">
    <div className="myJobAside__counterWrapper">
      <div className="myJobAside__counter">
        <span className="myJobAside__counterValue">
          {Object.keys(job).length ? job.applicants.length : ''}
        </span>
        <span>Applicants</span>
      </div>
      {/* <div className='myJobAside__counter'>
          <span  className='myJobAside__counterValue'>0/Static/</span>
          <span>Views</span>
        </div> */}
    </div>
      
    <div className="myJobAside__wrapper">
      <a className="myJobAside__post" href="#">
        <CreateIcon style={{ fontSize: 14, marginRight: 5 }} />
        Post a free job
      </a>
      <div className="myJobAside__disc">
        <p>Save up to 35% by purchasing job posting budget in advance.</p>
        <a className="myJobAside__discLink" href="#">Get discount</a>
      </div>
      <div className="myJobAside__disc">
        <p>Billing information</p>
        <a className="myJobAside__discLink" href="#">Payment method</a>
        <a className="myJobAside__discLink" href="#">Purchase history</a>
      </div>
    </div>
  </aside>
  );

export default MyJobAside;
