import { useState, useEffect, useContext } from 'react';
import './styles.css';

import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import JobInfo from '../jobInfo';
import JobApply from '../jobApply';
import JobRecruiter from '../jobRecruiter';
import JobDescription from '../jobDescription';

const JobDesc = ({ jobs, setJobs, selectedJob, setSelectedJob }) => {
    const [recruiter, setRecruiter] = useState({});
    const { user } = useContext(AuthContext);

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
              <JobInfo job={selectedJob} />
              <div className="jobs__contentRightButton">
                <JobApply applyHandler={applyHandler} job={selectedJob} user={user} />
              </div>

              <div className="jobs__recruiter">
                <JobRecruiter recruiter={recruiter} />
              </div>
              <JobDescription job={selectedJob} />
            </>
          )
        }
      </div>

  );
};

export default JobDesc;
