import React from 'react';
import './styles.css';

function InitialForm({ nextPage, jobData, setJobData }) {

  return (
    <section className='createJob__container'>
        <div className='createJob__content'>
            <h1>Find a greate hire, fast</h1>
            <p>Rated #1 in increasing quality of hire</p>
            <form className='createJob__form' action="">
                <div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job title</label>
                        <input 
                            type="text" 
                            value={jobData.title}
                            onChange={(e) => setJobData({...jobData, title:e.target.value})}
                        />
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Company</label>
                        <input 
                            type="text"
                            value={jobData.company}
                            onChange={(e) => setJobData({...jobData, company:e.target.value})}
                        />
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Workplace type</label>
                        <select 
                            value={jobData.workPlace}
                            onChange={(e) => setJobData({...jobData, workPlace:e.target.value})}
                        >
                            <option value="On site">On site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job location</label>
                        <input 
                            type="text"
                            value={jobData.location}
                            onChange={(e) => setJobData({...jobData, location:e.target.value})}
                        />
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job type</label>
                        <select
                            value={jobData.type}
                            onChange={(e) => setJobData({...jobData, type:e.target.value})}
                        >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Other">Other</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                </div>
                <button type='button' onClick={nextPage}>Get started for free</button>
            </form>
        </div>
    </section>
  )
}

export default InitialForm;
