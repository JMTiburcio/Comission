import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

function ScreeningQuestion({ jobData, setJobData, selected }) {
  // const handleDelete = () => {
  //   setJobData({...jobData, skills: jobData.skills.filter(e => e.id !== skill.id)})
  // }

  const handleCheckBox = () => {
    setJobData({...jobData, 
      screeningQuestions: jobData.screeningQuestions.map((e, i) => {
        if(i === selected.id - 1){
          return {...e, mustHave: !e.mustHave}
        } else {
          return e
        }
      })})
  }

  return (
    <section className='screeningQuestion__card'>
            <header>
              {selected.type === 'Skill' ? 
                <h3>How many years of work experience do you have with [{selected.type}]?</h3> :
                <h3>Have you completed the following level of education: [{selected.type}] ?</h3>
              }
              <div>Recommended</div>
            </header>
            <div className='screeningQuestion__cardListOptions'>
              <div className='screeningQuestion__cardOption'>
                <label htmlFor="">{selected.type}*</label>
                <input type="text" />
              </div>
              <div className='screeningQuestion__cardOption'>
                <label htmlFor="">Ideal answer (minimum):</label>
                <input type="text" />
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
