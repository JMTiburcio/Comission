import React from 'react';
import './styles.css';

const Question = ({ q, applyForm, setApplyForm }) => {
  return(
    <div className="applyQuestions__formOption">
      <label style={{ color:"black" }}>
        {q.question}
      </label>
      {
        q.response === "Boolean" ? (
          <>
            <div className="screeningQuestion__boolean">
              <input
                className="screeningQuestion__booleanInpt"
                type='radio'
                name='boolean'
                value='Yes'
                checked={q.applyAnswer === "Yes"}
                onChange={(e) => {
                  setApplyForm({
                    ...applyForm, 
                    questions: [...applyForm.questions.map(question => {
                      if(question.id === q.id) return {...q, applyAnswer: e.target.value}
                      else  return question }
                    )]
                })}}
                />
              <label className="screeningQuestion__booleanLabel" >Yes</label>
            </div>
            <div className="screeningQuestion__boolean">
              <input
                className="screeningQuestion__booleanInpt"
                type='radio'
                name='boolean'
                value='No'
                checked={q.applyAnswer === "No"}
                onChange={(e) => {
                  setApplyForm({
                    ...applyForm, 
                    questions: [...applyForm.questions.map(question => {
                      if(question.id === q.id) return {...q, applyAnswer: e.target.value}
                      else  return question }
                    )]
                })}}
                />
              <label className="screeningQuestion__booleanLabel">No</label>
            </div>
          </>
        ) : (
          <>
            <input
              className="screeningQuestion__number"
              min="0"
              type="number"
              value={q.applyAnswer}
              onChange={(e) => {
                setApplyForm({
                  ...applyForm, 
                  questions: [...applyForm.questions.map(question => {
                    if(question.id === q.id) return {...q, applyAnswer: e.target.value}
                    else  return question }
                  )]
              })}}
              />
          </>
        )
      }      
    </div>
)}

const ApplyQuestions = ({ nextPage, previousPage, applyForm, setApplyForm }) => (
    <div className="applyQuestions__content">
      <h1>Screening Questions</h1>
      <form action="" className="applyQuestions__form">
        {
          applyForm.questions.map((q) => (
            <Question key={q.id} q={q} applyForm={applyForm} setApplyForm={setApplyForm}/>
         ))
        }
      </form>
      <footer className='applyQuestions__footer'>
        <button onClick={nextPage} type="button" className='btnBlue'>Next</button>
        <button onClick={previousPage} type="button" className='btnWhite'>Back</button>
      </footer>
    </div>
  );

export default ApplyQuestions;
