import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

function ScreeningQuestion({ jobData, setJobData, selected }) {
  const handleDelete = () => {
    setJobData({...jobData, screeningQuestions: jobData.screeningQuestions.filter(e => e.id !== selected.id)})
  }

  const handleCheckBox = () => {
    setJobData({...jobData, 
      screeningQuestions: jobData.screeningQuestions.map((e) => {
        if(e.id === selected.id){
          return {...e, mustHave: !e.mustHave}
        } else {
          return e
        }
      })})
  }

  return (
    <section className='screeningQuestion__card'>
            <header>
                <h3>Write a custom screening question.</h3>
                <CloseIcon onClick={handleDelete} className='screeningQuestion__icon'/>
            </header>
            <div className='screeningQuestion__textInput'>
              <span>Help keep Comission respectful and professional. Learn about our custom question guidelines. *</span>
              <textarea></textarea>
            </div>
            <div className='screeningQuestion__cardListOptions'>
              <div className='screeningQuestion__cardOption'>
                <label htmlFor="">Response type:</label>
                <select name="" id="">
                  <option value="">Yes/No</option>
                  <option value="">Numeric</option>
                </select>
              </div>
              <div className='screeningQuestion__cardOption'>
                <label htmlFor="">Ideal answer:</label>
                <select name="" id="">
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
              <div className='screeningQuestion__cardMustHave'>
                <input 
                  type="checkbox" 
                  onChange={handleCheckBox}
                />
                <label htmlFor="">Must-have qualifications</label>
              </div>
            </div>
          </section>
          
  );
}

export default ScreeningQuestion;
