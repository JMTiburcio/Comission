import './styles.css';

import ScreeningQuestion from '../screeningQuestion/index';
import { generateId } from '../../utils';

const CreateJobAssess = ({ previousPage, submitForm, jobData, setJobData }) => {
  const handleNew = () => {
    setJobData({
      ...jobData,
      screeningQuestions: [...jobData.screeningQuestions,
      {
        id: generateId(),
        mustHave: false,
        response: 'Boolean',
        answer: 'Yes'
      }]
    });
  };

  const handleQual = () => {
    setJobData({ ...jobData, qualification: !jobData.qualification });
  };

  return (
    <section className="createJobAssess__container">
      <section className="createJobAssess__content">
        <h3>2 of 2: Tell us about your role</h3>
        <span>* indicates required</span>
        <div className="createJobAssess__applicantColl">
          <h2>Applicant collection</h2>
          <div>
            <div className="createJobAssess__receiveAppli">
              <label htmlFor="">Receive applicants by</label>
              <select
                onChange={(e) => setJobData({ ...jobData, applicantContact: { option: e.target.value, address: '' } })}
                value={jobData.applicantContact.option}
              >
                <option value="Email">Email</option>
                <option value="External Website">External Website</option>
              </select>
            </div>
            <div className="createJobAssess__address">
              <label htmlFor="">
                {jobData.applicantContact.option === 'Email' ? 'Email address *' : 'Website address *'}
              </label>
              <input
                onChange={(e) => setJobData({ ...jobData, applicantContact: { ...jobData.applicantContact, address: e.target.value } })}
                placeholder={jobData.applicantContact.option === 'Email' ? 'example@example.com' : 'htttp://yourcompany.com/job123'}
                type={jobData.applicantContact.option === 'Email' ? 'email' : 'url'}
                value={jobData.applicantContact.address}
              />
            </div>
          </div>
        </div>
        {jobData.applicantContact.option === 'Email'
          ? (
            <div className="createJobAssess__questions">
              <h2>Screening questions</h2>
              <div className="createJobAssess__wrapper">
                <p>We recommend adding 3 or more question. Applicants must answer each question.</p>
                <button onClick={handleNew} type="button">New</button>
              </div>

              {jobData.screeningQuestions.map((e) => (
                <ScreeningQuestion key={e.id} jobData={jobData} selected={e} setJobData={setJobData} />
              ))}

              <h2 className="createJobAssess__title">Qualification setting</h2>
              <div className="createJobAssess__qual">
                <input
                  className="createJobAssess__qualInput"
                  onChange={handleQual}
                  type="checkbox"
                />
                <label className="createJobAssess__qualLabel">
                  Filter out and send rejections to applicants who don&#39;t meet any must-have qualifications.
                </label>
              </div>
            </div>
          )
          : (
            <div className="createJobAssess__questions">
              <h2>Receive applicants by email to use screening questions</h2>
              <div className="createJobAssess__wrapper">
                <p>
                  Screening questions can&#39;t be collected from applicants when they apply on an external site.
                  If you would like to collect answers to screening questions, please choose to receive applicants by email.
                </p>
              </div>
            </div>
          )}

        <footer className="createJobAssess__footer">
          <button
            className="createJobAssess__footerSave"
            onClick={submitForm}
            type="button"
          >
            Save
          </button>
          <div>
            <button
              className="createJobAssess__footerBtn"
              onClick={previousPage}
              type="button"
            >
              Back
            </button>
            <button
              className="createJobAssess__footerBtn"
              onClick={submitForm}
              type="button"
            >
              Post job for free
            </button>
          </div>
        </footer>
      </section>
      <section className="createJobAssess__sideBar">
        <div className="createJobAssess__sideBarContainer">
          <img alt="#" src="#" />
          <h1>Software Engineer</h1>
          <h3>Comission</h3>
          <p>Barueri, São Paulo, Brazil</p>
          <span>Saved as Draft</span>
        </div>
        <div className="createJobAssess__sideBarContainer">
          <img alt="#" src="#" />
          <h3>Target your job to the right people</h3>
          <p>Include a job description and add required skills to target job seekers who match your criteria.</p>
        </div>
      </section>
    </section>
  );
};

export default CreateJobAssess;
