import React, { useState, useEffect } from 'react';
import './styles.css';
import { axiosInstance } from '../../config';
import Job from '../../newComponents/job';
import JobDesc from '../../newComponents/jobDesc';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axiosInstance.get("/jobs//all/search/") 
      setJobs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    }
    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchJob);
    console.log(searchLocation);
  }

  return (
    <div className="jobs">
      <header className='jobs__header'>
        <nav className='jobs__headerNav'>
          <h1 className='jobs__comission'>
            Comission
          </h1>
          <section className='jobs__searchBar'>
            <form className='jobs__headerForm'>
              <section className='jobs__searchJob'>
                <input 
                  type="text" 
                  placeholder='Search job'
                  onChange={e => {
                    setSearchJob(e.target.value)
                  }}
                />
              </section>
              <section className='jobs__searchLocation'>
                <input 
                  type="text" 
                  placeholder='Location'
                  onChange={e => {
                    setSearchLocation(e.target.value)
                  }}
                />
              </section>
              <button
                type='submit'
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </section>
          <a href="/">Home</a>
          <a href="/createJob">Create Job</a>
          <a href="/postedJobs">Manage Jobs</a>
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