import React from 'react';
import './styles.css';
import ScreeningQuestionView from '../screeningQuestionView';

function MyJobContainer({ job }) {
  // console.log(job.screeningQuestions[0])
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

      <div>
        {
          job.screeningQuestions.map(scr => (
            <ScreeningQuestionView scrQuestion={scr}/>
          ))
        }
      </div>
    </section>
  );
}

export default MyJobContainer;
