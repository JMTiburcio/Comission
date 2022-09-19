import React from 'react';
import './styles.css';

function CreateJobAssess() {
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
              <select name="" id="">
                <option value="">Email</option>
              </select>
            </div>
            <div className='createJobAssess__email'>
              <label htmlFor="">Email address*</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className='createJobAssess__questions'>
          <h2>Screening questions</h2>
          <p>We recommend adding 3 or more question. Applicants must answer each question.</p>
          
          <section className='createJobAssess__card'>
            <header>
              <h3>How many years of work experience do you have with [Skill]?</h3>
              <div>Recommended</div>
            </header>
            <div className='createJobAssess__cardListOptions'>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Skill*</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Ideal answer (minimum):</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardMustHave'>
                <input type="checkbox" />
                <label htmlFor="">Must-have qualifications</label>
              </div>
            </div>
          </section>
          <section className='createJobAssess__card'>
            <header>
              <h3>How many years of work experience do you have with [Skill]?</h3>
              <div>Recommended</div>
            </header>
            <div className='createJobAssess__cardListOptions'>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Skill*</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Ideal answer (minimum):</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardMustHave'>
                <input type="checkbox" />
                <label htmlFor="">Must-have qualifications</label>
              </div>
            </div>
          </section>
          <section className='createJobAssess__card'>
            <header>
              <h3>How many years of work experience do you have with [Skill]?</h3>
              <div>Recommended</div>
            </header>
            <div className='createJobAssess__cardListOptions'>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Skill*</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardOption'>
                <label htmlFor="">Ideal answer (minimum):</label>
                <input type="text" />
              </div>
              <div className='createJobAssess__cardMustHave'>
                <input type="checkbox" />
                <label htmlFor="">Must-have qualifications</label>
              </div>
            </div>
          </section>
          <p>Add screening questions:</p>
          <ul>
            <li><a href="#">+ Background Check</a></li>
            <li><a href="#">+ Driver's License</a></li>
            <li><a href="#">+ Drug Test</a></li>
            <li><a href="#">+ Education</a></li>
            <li><a href="#">+ Expertise with Skill</a></li>
            <li><a href="#">+ Hybrid Work</a></li>
            <li><a href="#">+ Industry Experience</a></li>
            <li><a href="#">+ Language</a></li>
            <li><a href="#">+ Location</a></li>
            <li><a href="#">+ Remote Work</a></li>
            <li><a href="#">+ Urgent Hiring Need</a></li>
            <li><a href="#">+ Visa Status</a></li>
            <li><a href="#">+ Work Experience</a></li>
            <li><a href="#">+ Custom Question</a></li>
          </ul>
        </div>

        <footer className='createJobAssess__footer'>
          <a href="#">Preview</a>
          <div>
            <a href="#">Back</a>
            <a href="#">Post job for free</a>
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
