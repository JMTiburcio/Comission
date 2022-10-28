import React from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

const ScreeningQuestion = ({ jobData, setJobData, selected }) => {
  const handleDelete = () => {
    setJobData({ ...jobData, screeningQuestions: jobData.screeningQuestions.filter((e) => e.id !== selected.id) });
  };

  const handleCheckBox = () => {
    setJobData({ ...jobData,
      screeningQuestions: jobData.screeningQuestions.map((e) => {
        if (e.id === selected.id) {
          return { ...e, mustHave: !e.mustHave };
        }
          return e;
      }) });
  };

  const handleText = (e) => {
    setJobData({ ...jobData,
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if (scr.id === selected.id) {
          return { ...scr, question: e.target.value };
        }
          return scr;
      }) });
  };

  const handleResponse = (e) => {
    setJobData({ ...jobData,
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if (scr.id === selected.id) {
          if (e.target.value === 'Numeric') {
            return { ...scr, response: e.target.value, answer: 1 };
          }
            return { ...scr, response: e.target.value };
        }
          return scr;
      }) });
  };

  const handleAnswer = (e) => {
    setJobData({ ...jobData,
      screeningQuestions: jobData.screeningQuestions.map((scr) => {
        if (scr.id === selected.id) {
          return { ...scr, answer: e.target.value };
        }
          return scr;
      }) });
  };

  return (
    <section className="screeningQuestion__card">
      <header>
        <h3>Write a custom screening question.</h3>
        <CloseIcon className="screeningQuestion__icon" onClick={handleDelete} />
      </header>
      <div className="screeningQuestion__textInput">
        <span>Help keep Comission respectful and professional. Learn about our custom question guidelines. *</span>
        <textarea
          onChange={handleText}
          type="text"
          value={selected.question}
        />
      </div>
      <div className="screeningQuestion__cardListOptions">
        <div className="screeningQuestion__cardOption">
          <label className="screeningQuestion__label">Response type:</label>
          <select
            className="screeningQuestion__select"
            onChange={handleResponse}
            value={selected.response}
          >
            <option value="Boolean">Yes / No</option>
            <option value="Numeric">Numeric</option>
          </select>
        </div>
        {
                selected.response === 'Boolean'
                ? (
                  <div className="screeningQuestion__cardOption">
                    <label className="screeningQuestion__label">Ideal answer:</label>
                    <select
                      className="screeningQuestion__select"
                      onChange={handleAnswer}
                      value={selected.answer}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
)
                 : (
                   <div className="screeningQuestion__cardOption">
                     <label className="screeningQuestion__label">Ideal answer:</label>
                     <div className="screeningQuestion__number">
                       <input
                         className="screeningQuestion__inputNumber"
                         min="0"
                         onChange={handleAnswer}
                         type="number"
                         value={selected.answer}
                       />
                       <label className="screeningQuestion__label">minimum</label>

                     </div>
                   </div>
              )
}
        <div className="screeningQuestion__cardMustHave">
          <input
            onChange={handleCheckBox}
            type="checkbox"
          />
          <label className="screeningQuestion__label">Must-have qualifications</label>
        </div>
      </div>
    </section>
          
  );
};

export default ScreeningQuestion;
