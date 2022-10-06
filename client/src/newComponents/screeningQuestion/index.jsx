import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

function ScreeningQuestion({ jobData, setJobData, selected }) {
  console.log(jobData)

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

  const handleText = (e) => {
    setJobData({...jobData, 
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if(scr.id === selected.id){
          return {...scr, question: e.target.value}
        } else {
          return scr
        }
      })})
  }

  const handleResponse = (e) => {
    setJobData({...jobData, 
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if(scr.id === selected.id){
          if(e.target.value === 'Numeric'){
            return {...scr, response: e.target.value, answer: 1}
          } else {
            return {...scr, response: e.target.value}
          }
        } else {
          return scr
        }
      })})
  }

  const handleAnswer = (e) => {
    setJobData({...jobData, 
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if(scr.id === selected.id){
          return {...scr, answer: e.target.value}
        } else {
          return scr
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
              <textarea
                type="text" 
                value={selected.question}
                onChange={handleText}
              ></textarea>
            </div>
            <div className='screeningQuestion__cardListOptions'>
              <div className='screeningQuestion__cardOption'>
                <label className='screeningQuestion__label'>Response type:</label>
                <select 
                  className='screeningQuestion__select'
                  value={selected.response}
                  onChange={handleResponse}
                >
                  <option value="Boolean">Yes / No</option>
                  <option value="Numeric">Numeric</option>
                </select>
              </div>
              {
                selected.response === 'Boolean' ?
                <div className='screeningQuestion__cardOption'>
                  <label className='screeningQuestion__label'>Ideal answer:</label>
                  <select 
                    className='screeningQuestion__select'
                    value={selected.answer}
                    onChange={handleAnswer}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>  
                 :
                <div className='screeningQuestion__cardOption'>
                  <label className='screeningQuestion__label'>Ideal answer:</label>
                  <div className='screeningQuestion__number'>
                    <input
                      className='screeningQuestion__inputNumber'
                      type='number'
                      min='0'
                      value= {selected.answer}
                      onChange={handleAnswer}
                    >
                    </input>
                    <label className='screeningQuestion__label'>minimum</label>

                  </div>
                </div>
              }
              <div className='screeningQuestion__cardMustHave'>
                <input 
                  type="checkbox" 
                  onChange={handleCheckBox}
                />
                <label className='screeningQuestion__label'>Must-have qualifications</label>
              </div>
            </div>
          </section>
          
  );
}

export default ScreeningQuestion;
