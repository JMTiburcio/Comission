import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'timeago.js';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import './styles.css';

import TopBar from '../../components/topbar';
import ManageAside from '../../newComponents/manageAside';
import JobStatus from '../../newComponents/jobStatus';

const JobView = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(false);
    const [recruiter, setRecruiter] = useState({});
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const res = await axiosInstance.get(`/jobs/${jobId}`);
          setJob(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchJobs();
    }, [jobId]);
    
    useEffect(() => {
      if (job) {
        const fetchRecruiter = async () => {
          const res = await axiosInstance.get(`/users/?userId=${job.userId}`);
          setRecruiter(res.data);
        };
        fetchRecruiter();
      }
      }, [job, user]);
    
    return (
      <>
        <TopBar />
        <main className="jobView">
          { job ? (
            <section className="jobView__content">
              <div className="jobView__overview">
                <h2>{job.title}</h2>
                <h4>
                  {job.location}  -  {format(job.createdAt)} -  {job.applicants.length} applicant{job.applicants.length !== 1 ? 's' : ''}
                </h4>
                <ul>
                  <li><span>{job.type}</span></li>
                  <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
                  <li><span>See recent hiring trends on <b>{job.company}</b></span></li>
                  <li><JobStatus status={job.status} /></li>
                </ul>
              </div>
              <div className="jobView__recruiter">
                <h3>Meet the hiring team</h3>
                <section>
                  <img alt="#" src={recruiter.profilePicture ? PF + recruiter.profilePicture : `${PF}person/noAvatar.png`} />
                  <div className="jobView__recruiterDesc">
                    <h5>{recruiter.username}</h5>
                    <p>Tech Recruiter | Analista de Recrutamento e Seleção na Comission</p>
                  </div>
                  <a href="#">Message</a>
                </section>
              </div>
              <div className="jobView__description">
                <h3>About the job</h3>
                <p>{job.desc}</p>
              </div>
            </section>
          )
            : <div className="jobView__content">Loading</div>}
          <ManageAside page="jobView" />
        </main>
      </>
    );
};

export default JobView;
