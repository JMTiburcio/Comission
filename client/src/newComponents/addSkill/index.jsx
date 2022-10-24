import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

function AddSkill({ jobData, setJobData, skill }) {
  const handleDelete = () => {
    setJobData({...jobData, skills: jobData.skills.filter(e => e.id !== skill.id)})
  }
  
  return (
    <>
      <button onClick={handleDelete} className='addSkill__button'>
        <a className='addSkill_text'>{skill.item}</a>
        <CloseIcon className='addSkill__icon'/>
      </button>
    </>
  );
}

export default AddSkill;
