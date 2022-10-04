import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

function AddButton({ jobData, setJobData, skill }) {
  const handleDelete = () => {
    setJobData({...jobData, skills: jobData.skills.filter(e => e.id !== skill.id)})
  }
  
  return (
    <>
      <button onClick={handleDelete} className='addButton__button'>
        <a className='addButton_text'>{skill.item}</a>
        <CloseIcon className='addButton__icon'/>
      </button>
    </>
  );
}

export default AddButton;
