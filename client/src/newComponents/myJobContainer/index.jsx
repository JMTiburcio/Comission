import React from 'react';
import './styles.css';

function MyJobContainer({ job, selected={response:'Boolean'} }) {
  console.log(job)
  return (
    <section className='myJobContainer__section'>
      <div className='myJobContainer'>
        <h1 className='myJobContainer__header'>Job Description</h1>
        <article className='myJobContainer__content'>
          <section className='myJobContainer__description'>
            {job.desc}
          </section>
          <section className='myJobContainer__details'>
            <h4>Employment type</h4>
            <div>{job.type}</div>
          </section>
        </article>
      </div>


      <div className='myJobContainer'>
        <h1 className='myJobContainer__header'>Screening Questions</h1>
        <section className='screeningQuestion__card'>
            <header>
                <h3>Write a custom screening question.</h3>
            </header>
            <div className='screeningQuestion__textInput'>
              <span>Help keep Comission respectful and professional. Learn about our custom question guidelines. *</span>
              <textarea
                type="text" 
                // value={selected.question}
                // onChange={handleText}
              ></textarea>
            </div>
            <div className='screeningQuestion__cardListOptions'>
              <div className='screeningQuestion__cardOption'>
                <label className='screeningQuestion__label'>Response type:</label>
                <select 
                  className='screeningQuestion__select'
                  // value={selected.response}
                  // onChange={handleResponse}
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
                    // value={selected.answer}
                    // onChange={handleAnswer}
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
                      // value= {selected.answer}
                      // onChange={handleAnswer}
                    >
                    </input>
                    <label className='screeningQuestion__label'>minimum</label>

                  </div>
                </div>
              }
              <div className='screeningQuestion__cardMustHave'>
                <input 
                  type="checkbox" 
                  // onChange={handleCheckBox}
                />
                <label className='screeningQuestion__label'>Must-have qualifications</label>
              </div>
            </div>
          </section>
      </div>
    </section>
  );
}

export default MyJobContainer;
