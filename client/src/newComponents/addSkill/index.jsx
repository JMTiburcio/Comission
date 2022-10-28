import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

const AddSkill = ({ jobData, setJobData, skill }) => {
  const handleDelete = () => {
    setJobData({ ...jobData, skills: jobData.skills.filter((e) => e.id !== skill.id) });
  };
  
  return (
    <button className="addSkill__button" onClick={handleDelete} type="button">
      <a className="addSkill_text">{skill.item}</a>
      <CloseIcon className="addSkill__icon" />
    </button>
  );
};

export default AddSkill;
