import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import './styles.css';

import TopBar from '../../components/topbar';
import ManageAside from '../../newComponents/manageAside';
import JobInfo from '../../newComponents/jobInfo';
import JobApply from '../../newComponents/jobApply';
import JobRecruiter from '../../newComponents/jobRecruiter';
import JobDescription from '../../newComponents/jobDescription';

const JobView = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(false);
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

    const applyHandler = async () => {
      try {
          await axiosInstance.put(`/jobs/apply/${job._id}`, { userId: user._id });
          const res = await axiosInstance.get(`/jobs/${job._id}`);
          setJob(res.data);
      } catch (err) {
          console.log(err);
      }
    };
    
    return (
      <>
        <TopBar />
        <main className="jobView">
          { job ? (
            <section className="jobView__content">
              <div className="jobView__overview">
                <JobInfo job={job} />
                <div className="jobs__contentRightButton">
                  <JobApply applyHandler={applyHandler} job={job} user={user} />
                </div>
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
