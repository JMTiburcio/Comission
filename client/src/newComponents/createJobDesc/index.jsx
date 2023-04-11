import { useState } from 'react';
import './styles.css';
import AddSkill from '../addSkill';
import { generateId } from '../../utils';

const CreateJobDesc = ({ nextPage, previousPage, jobData, setJobData }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill) {
      setJobData({ ...jobData, skills: [...jobData.skills, { id: generateId(), item: newSkill }] });
      setNewSkill('');
    }
  };
  
  return (
    <section className="createJobDesc__container">
      <section className="createJobDesc__content">
        <h3>1 of 2: Tell us about your role</h3>
        <span>* indicates required</span>
        <div className="createJobDesc__desc">
          <h2>Description *</h2>
          <div>
            <textarea
              className="createJobDesc__textEditorInput"
              onChange={(e) => setJobData({ ...jobData, desc: e.target.value })}
              value={jobData.desc}
            />
          </div>
        </div>
        <div className="createJobDesc__skill">
          <h2>Skills</h2>
          <p>Add skill keyword to make your job more visible to the right candidates</p>
          <ul>
            { jobData.skills.map((p) => (
              <li key={p.id}><AddSkill jobData={jobData} setJobData={setJobData} skill={p} /></li>
            ))}
          </ul>
          <form>
            <label htmlFor="">Skill: </label>
            <input
              onChange={(e) => setNewSkill(e.target.value)}
              value={newSkill}
            />
            <button onClick={handleAddSkill} type="button">Add</button>
          </form>
        </div>
        <div className="createJobDesc__source">
          <h2>How did you hear about Linkedin Jobs?</h2>
          <select
            onChange={(e) => setJobData({ ...jobData, hearAbout: e.target.value })}
            value={jobData.hearAbout}
          >
            <option value="">Select a source</option>
            <option value="In the email">In the email</option>
            <option value="TV">TV</option>
            <option value="Podcast">Podcast</option>
            <option value="Online Ad">Online Ad</option>
            <option value="Streaming Audio">Streaming Audio</option>
            <option value="Radio">Radio</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <footer className="createJobDesc__footer">
          <div>
            <button onClick={previousPage} type="button">Back</button>
            <button onClick={nextPage} type="button">Next</button>
          </div>
        </footer>
      </section>
      <section className="createJobDesc__sideBar">
        <div className="createJobDesc__sideBarContainer">
          <img alt="#" src="#" />
          <h1>Software Engineer</h1>
          <h3>Comission</h3>
          <p>Barueri, São Paulo, Brazil</p>
          <span>Saved as Draft</span>
        </div>
        <div className="createJobDesc__sideBarContainer">
          <img alt="#" src="#" />
          <h3>Target your job to the right people</h3>
          <p>Include a job description and add required skills to target job seekers who match your criteria.</p>
        </div>
      </section>
    </section>
  );
};

export default CreateJobDesc;
