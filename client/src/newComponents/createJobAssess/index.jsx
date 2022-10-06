import React, { useState } from 'react';
import './styles.css';

import ScreeningQuestion from '../screeningQuestion/index';

function CreateJobAssess({ previousPage, submitForm, jobData, setJobData }) {
  const [quesitonId, setQuestionId] = useState(2)
  const handleNew = () => {
    setJobData({...jobData, screeningQuestions: [...jobData.screeningQuestions,
      {
          id: quesitonId,
          type: 'Degree',
          mustHave: false,
          response: 'Boolean',
          answer: 'Yes',
      }]})
    setQuestionId(quesitonId + 1)
  }

  const handleQual = () => {
    setJobData({...jobData, qualification: !jobData.qualification})
  }

  return (
    <section className='createJobAssess__container'>
      <section className='createJobAssess__content'>
        <h3>2 of 2: Tell us about your role</h3>
        <span>* indicates required</span>
        <div className='createJobAssess__applicantColl'>
          <h2>Applicant collection</h2>
          <div>
            <div className='createJobAssess__receiveAppli'>
              <label htmlFor="">Receive applicants by</label>
              <select 
                value={jobData.applicantContact.option}
                onChange={(e) => setJobData({...jobData, applicantContact: {option: e.target.value, address: ''}})}
              >
                <option value="Email">Email</option>
                <option value="External Website">External Website</option>
              </select>
            </div>
            <div className='createJobAssess__address'>
              <label htmlFor="">
                {jobData.applicantContact.option === 'Email' ? 'Email address *' : 'Website address *'}
              </label>
              <input 
                placeholder={jobData.applicantContact.option === 'Email' ? "example@example.com" : "htttp://yourcompany.com/job123"}
                type={jobData.applicantContact.option === 'Email' ? "email" : "url"}
                value= {jobData.applicantContact.address}
                onChange={(e) => setJobData({...jobData, applicantContact: {...jobData.applicantContact, address: e.target.value}})}
              />
            </div>
          </div>
        </div>

        <div className={'createJobAssess__questions'+
          (jobData.applicantContact.option === 'Email' ? '' : ' no-display')}>
          <h2>Screening questions</h2>
          <div className='createJobAssess__wrapper'>
            <p>We recommend adding 3 or more question. Applicants must answer each question.</p>
            <button onClick={handleNew}>New</button>
          </div>

          {jobData.screeningQuestions.map((e) => (
              <ScreeningQuestion key={e.id} jobData={jobData} setJobData={setJobData} selected={e}/>
          ))}

          <h2 className='createJobAssess__title'>Qualification setting</h2>
          <div className='createJobAssess__qual'>
            <input 
              className='createJobAssess__qualInput'
              type="checkbox" 
              onChange={handleQual}
            />
            <label className='createJobAssess__qualLabel'>
              Filter out and send rejections to applicants who don’t meet any must-have qualifications.
            </label>
          </div>
        </div>

        <footer className='createJobAssess__footer'>
          <a href="#">Preview</a>
          <div>
            <button type='button' onClick={previousPage}>Back</button>
            <button type='button' onClick={submitForm}>Post job for free</button>
          </div>
        </footer>
      </section>
      <section className='createJobAssess__sideBar'>
        <div className="createJobAssess__sideBarContainer">
            <img src="#" alt="#" />
            <h1>Software Engineer</h1>
            <h3>Comission</h3>
            <p>Barueri, São Paulo, Brazil</p>
            <span>Saved as Draft</span>
        </div>
        <div className="createJobAssess__sideBarContainer">
            <img src="#" alt="#" />
            <h3>Target your job to the right people</h3>
            <p>Include a job description and add required skills to target job seekers who match your criteria.</p>
        </div>
      </section>
    </section>
  )
}

export default CreateJobAssess;
