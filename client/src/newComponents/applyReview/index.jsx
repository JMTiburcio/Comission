import React from 'react';
import './styles.css';

const ApplyReview = ({ nextPage, previousPage, applyForm, setApplyForm }) => (
    <div className="applyReview__content">
      <h1>Review your application</h1>
      <p>The employer will also receive a copy of your profile.</p>
      <div>
        <h3>Contact Information</h3>
        <h6>E-mail</h6>
        <span>{applyForm.email}</span>
        <h6>Phone</h6>
        <span>{applyForm.phone}</span>
      </div>
      <div>
        <h3>Screening Questions</h3>
        {
          applyForm.questions.map(question => (
            <div key={question.id}>
              <h6>
                {question.question}
              </h6>
              <span>{question.applyAnswer}</span>
            </div>
          ))
        }
      </div>
      <footer className='applyReview__footer'>
        <button onClick={nextPage} type="button" className='btnBlue'>Submit application</button>
        <button onClick={previousPage} type="button" className='btnWhite'>Back</button>
      </footer>
    </div>
  );

export default ApplyReview;
