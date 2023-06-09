import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import './styles.css';

import NavBar from '../../newComponents/navbar';
import ManageAside from '../../newComponents/manageAside';
import JobInfo from '../../newComponents/jobInfo';
import JobApply from '../../newComponents/jobApply';
import JobRecruiter from '../../newComponents/jobRecruiter';
import JobDescription from '../../newComponents/jobDescription';
import Modal from '../../newComponents/modal';

const JobView = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [recruiter, setRecruiter] = useState({});
    const { user } = useContext(AuthContext);

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

    useEffect(() => {
      if(job && user) {
        setIsApplied(job.applicants.includes(user._id));
      }
    }, [job, user])

    
    return (
      <>
        <NavBar />
        <main className="jobView">
          { job ? (
            <section className="jobView__content">
              <div className="jobView__overview">
                <JobInfo job={job} />
                { ((job.status === 'open') && (isApplied !== null)) && (
                  <div className="jobView__apply">
                    <JobApply openModal={() => setOpenModal(true)} isApplied={isApplied} />
                    <Modal open={openModal} onClose={() => setOpenModal(false)} job={job} isApplied={isApplied} />
                  </div>
                )}
              </div>
              <div className="jobView__recruiter">
                <JobRecruiter recruiter={recruiter} />
              </div>
              <div className="jobView__description">
                <h3>About the job</h3>
                <JobDescription job={job} />
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
