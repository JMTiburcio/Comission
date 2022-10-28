import { useState, useEffect, useContext } from 'react';
import './styles.css';
import { format } from 'timeago.js';

// import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';

const JobDesc = ({ jobs, setJobs, selectedJob, setSelectedJob }) => {
    const [recruiter, setRecruiter] = useState({});
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
      if (selectedJob) {
        const fetchRecruiter = async () => {
          const res = await axiosInstance.get(`/users/?userId=${selectedJob.userId}`);
          setRecruiter(res.data);
        };
        fetchRecruiter();
      }
    }, [selectedJob, user]);

    const applyHandler = async () => {
      try {
          await axiosInstance.put(`/jobs/apply/${selectedJob._id}`, { userId: user._id });
          const updatedJob = await axiosInstance.get(`/jobs/${selectedJob._id}`);
          setJobs([...jobs.slice(0, jobs.indexOf(selectedJob)),
            updatedJob.data, ...jobs.slice(jobs.indexOf(selectedJob) + 1)]);
          setSelectedJob(updatedJob.data);
      } catch (err) {
          console.log(err);
      }
  };

    return (
      <div className="jobs__contentRight">
        {
          selectedJob && (
            <>
              <h2>{selectedJob.title}</h2>
              <h4>
                {selectedJob.location}  -  {format(selectedJob.createdAt)}  - {selectedJob.applicants.length}
                applicant{selectedJob.applicants.length !== 1 ? 's' : ''}
              </h4>
              <ul>
                <li><span>{selectedJob.type}</span></li>
                <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
                <li><span>See recent hiring trends on <b>{selectedJob.company}</b></span></li>
                <li><span>/Static/ Actively recruiting</span></li>
              </ul>
              <div className="jobs__contentRightButton">
                <button
                  className={`jobs__applyButton${selectedJob.applicants.includes(user._id) ? '--cancel' : ''}`}
                  onClick={applyHandler}
                  type="button"
                >
                  {(selectedJob.applicants.includes(user._id) ? '' : <CreateIcon style={{ fontSize: 18 }} />)}
                  {(selectedJob.applicants.includes(user._id) ? 'Cancel' : 'Apply')}
                </button>
              </div>

              <div className="jobs__recruiter">
                <h3>Meet the hiring team</h3>
                <section>
                  <img alt="#" src={recruiter.profilePicture ? PF + recruiter.profilePicture : `${PF}person/noAvatar.png`} />
                  <div className="jobs__recruiterDesc">
                    <h5>{recruiter.username}</h5>
                    <p>Tech Recruiter | Analista de Recrutamento e Seleção na Comission</p>
                  </div>
                  <a href="#">Message</a>
                </section>
              </div>
              <p>{selectedJob.desc}</p>
            </>
          )
        }
      </div>

  );
};

export default JobDesc;
