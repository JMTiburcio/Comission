import React from 'react';
import './styles.css';
import ScreeningQuestionView from '../screeningQuestionView';

const MyJobContainer = ({ job }) => (
  <section className="myJobContainer__section">
    <div className="myJobContainer">
      <h1 className="myJobContainer__header">Job Description</h1>
      <article className="myJobContainer__content">
        <section className="myJobContainer__description">
          {job.desc}
        </section>
        <section className="myJobContainer__details">
          <h4>Employment type</h4>
          <div>{job.type}</div>
        </section>
      </article>
    </div>

    <div>
      { Object.keys(job).length
          ? job.screeningQuestions.map((scr) => (
            <ScreeningQuestionView key={scr.id} scrQuestion={scr} />
          ))
          : null}
    </div>
  </section>
  );

export default MyJobContainer;
