import React from 'react';
import './styles.css';

const ScreeningQuestionView = ({ scrQuestion }) => (
  <section className="screeningQuestionView__card">
    <div className="screeningQuestionView__question">
      <h3>{scrQuestion.question}</h3>
    </div>
    <div className="screeningQuestionView__answers">
      <div className="screeningQuestionView__answer">
        <label className="screeningQuestionView__label">Ideal answer:</label>
        <span>{scrQuestion.answer}</span>
      </div>
      <div className="screeningQuestionView__answer">
        <label className="screeningQuestionView__label">Must-have:</label>
        <span>{scrQuestion.have ? 'Yes' : 'No'}</span>
      </div>
    </div>
  </section>
  );

export default ScreeningQuestionView;
