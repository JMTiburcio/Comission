import React from 'react';
import './styles.css';


function ScreeningQuestionView({ scrQuestion }) {
  return (
    <section className='screeningQuestionView__card'>
      <div className='screeningQuestionView__textInput'>
        {scrQuestion.question}
      </div>
      <label className='screeningQuestionView__label'>Ideal answer:</label>
      <span>{scrQuestion.answer}</span>
    </section>      
  );
}

export default ScreeningQuestionView;
