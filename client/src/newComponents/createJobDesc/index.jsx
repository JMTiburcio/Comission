import React from 'react';
import './styles.css';

function CreateJobDesc({ nextPage, previousPage, jobData, setJobData }) {
  return (
    <section className='createJobDesc__container'>
      <section className='createJobDesc__content'>
        <h3>1 of 2: Tell us about your role</h3>
        <span>* indicates required</span>
        <div className='createJobDesc__desc'>
          <h2>Description *</h2>
          <div>
            <textarea
              className='createJobDesc__textEditorInput'
              type="text" 
              value={jobData.desc}
              onChange={(e) => setJobData({...jobData, desc:e.target.value})}
            ></textarea>
          </div>
        </div>
        <div className='createJobDesc__skill'>
          <h2>Skills</h2>
          <p>Add skill keyword to make your job more visible to the right candidates</p>
          <ul>
            <li><a href="#">SQL Database X</a></li>
            <li><a href="#">SQL X</a></li>
            <li><a href="#">Databases X</a></li>
            <li><a href="#">Programming X</a></li>
            <li><a href="#">Computer Science X</a></li>
            <li><a href="#">Programming Languages X</a></li>
            <li><a href="#">Web Applications X</a></li>
            <li><a href="#">Design X</a></li>
            <li><a id='createJobDesc__addSkill' href="#">Add skill +</a></li>
          </ul>
        </div>
        <div className='createJobDesc__source'>
          <h2>How did you hear about Linkedin Jobs?</h2>
          <select>
            <option value="">Select a source</option>
            <option value="">In the email</option>
            <option value="">Tv</option>
            <option value="">Podcast</option>
            <option value="">Online Ad</option>
            <option value="">Streaming Audio</option>
            <option value="">Radio</option>
            <option value="">Other</option>
          </select>
        </div>
        <footer className='createJobDesc__footer'>
          <a href="#">Preview</a>
          <div>
            <button type='button' onClick={previousPage}>Back</button>
            <button type='button' onClick={nextPage}>Next</button>
          </div>
        </footer>
      </section>
      <section className='createJobDesc__sideBar'>
        <div className="createJobDesc__sideBarContainer">
            <img src="#" alt="#" />
            <h1>Software Engineer</h1>
            <h3>Comission</h3>
            <p>Barueri, São Paulo, Brazil</p>
            <span>Saved as Draft</span>
        </div>
        <div className="createJobDesc__sideBarContainer">
            <img src="#" alt="#" />
            <h3>Target your job to the right people</h3>
            <p>Include a job description and add required skills to target job seekers who match your criteria.</p>
        </div>
      </section>
    </section>
  )
}

export default CreateJobDesc;
