import React from 'react';
import './styles.css';

const ApplyUserInfo = ({ nextPage, applyForm, setApplyForm }) => (
    <div className="applyUserInfo__content">
      <h1>Contact information</h1>
      <form action="" className="applyUserInfo__form">
        <div className="applyUserInfo__formOption">
          <label htmlFor="">Email*</label>
          <input
            onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
            type="text"
            value={applyForm.email}
          />
        </div>
        <div className="applyUserInfo__formOption">
          <label htmlFor="">Phone Number*</label>
          <input
            onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
            type="text"
            value={applyForm.phone}
          />
        </div>
        {/* <div className="applyUserInfo__formOption">
          <label htmlFor="">Workplace type</label>
          <select
            onChange={(e) => setApplyForm({ ...applyForm, workPlace: e.target.value })}
            value={applyForm.workPlace}
          >
            <option value="On site">On site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div> */}
      </form>
      <footer className='applyUserInfo__footer'>
        <button onClick={nextPage} type="button" className='btnBlue'>Next</button>
      </footer>
    </div>
  );

export default ApplyUserInfo;
