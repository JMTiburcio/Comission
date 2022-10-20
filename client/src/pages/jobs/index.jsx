import React, { useState, useEffect } from 'react';
import './styles.css';
import { axiosInstance } from '../../config';
import Job from '../../newComponents/job';
import JobDesc from '../../newComponents/jobDesc';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axiosInstance.get("/jobs/alljobs/get") 
      setJobs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    }
    fetchJobs();
  }, []);

  return (
    <div className="jobs">
      <header className='jobs__header'>
        <nav className='jobs__headerNav'>
          <h1 className='jobs__comission'>Comission</h1>
          <section className='jobs__searchBar'>
            <div>
              <span className='jobs__buttonSpan'>Jobs</span>
            </div>
            <form className='jobs__headerForm' action="">
              <section className='jobs__searchJob'>
                <input type="text" placeholder=' Search job'/>
              </section>
              <section className='jobs__searchLocation'>
                <input type="text" placeholder=' Location'/>
              </section>
              <button>Search</button>
            </form>
          </section>
          <a href="/">HomePage</a>
          <a href="/createJob">Create Job</a>
        </nav>
      </header>

      <section className='jobs__sectionFilter'>
        <a href="#">Any Time</a>
        <a href="#">Company</a>
        <a href="#">Salary</a>
        <a href="#">Location</a>
        <a href="#">Job Type</a>
        <a href="#">Experience Level</a>
        <a href="#">On-site/Remote</a>
      </section>

      <section className='jobs__content'>
        <div className='jobs__contentLeft'>
          <h3>6,822,000+ Jobs in United States</h3>
          <ul className='jobs__resultList'>
            { jobs.map((p) => (
              <li 
                onClick={() => {setSelectedJob(p)}} 
                key={p._id}
              >
                <Job job={p} selectedJob={selectedJob}/>
              </li>
            ))}
          </ul>
        </div>
        <JobDesc selectedJob={selectedJob} jobs={jobs} setJobs={setJobs} setSelectedJob={setSelectedJob}/>
      </section>
    </div>
  );
}

export default Jobs;