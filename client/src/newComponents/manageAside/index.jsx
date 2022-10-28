import React from 'react';
import './styles.css';
import CreateIcon from '@mui/icons-material/Create';

const ManageAside = ({ page }) => (
  <aside className="manageAside">
    <div className="manageAside__wrapper">
      <a className="manageAside__link" href={(page === 'postedJob' ? '/createJob' : '/jobs')}>
        <CreateIcon style={{ fontSize: 14, marginRight: 5 }} />
        {page === 'postedJob' ? 'Post a free job' : 'Apply for a job'}
      </a>
      {
            page === 'postedJob'
            ? (
              <>
                <div className="manageAside__disc">
                  <p>Save up to 35% by purchasing job posting budget in advance.</p>
                  <a className="manageAside__discLink" href="#">Get discount</a>
                </div>
                <div className="manageAside__disc">
                  <p>Billing information</p>
                  <a className="manageAside__discLink" href="#">Payment method</a>
                  <a className="manageAside__discLink" href="#">Purchase history</a>
                </div>
              </>
)
             : (
               <div className="manageAside__disc">
                 <p>Learn what hiring managers look for in answers to top interview questions.</p>
               </div>
            )
}
    </div>
  </aside>
  );

export default ManageAside;
