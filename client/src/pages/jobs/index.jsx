import React, { useState, useEffect } from 'react';
import './styles.css';
import { axiosInstance } from '../../config';
import Job from '../../newComponents/job';
import JobDesc from '../../newComponents/jobDesc';
import JobFilter from '../../newComponents/jobFilter';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [query, setQuery] = useState({
    "date":'Any Time',
    "title":"",
    "location":"",
    "company":"",
    "workPlace":[],
    "type":[]
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axiosInstance.get("/jobs/all/search/") 
      setJobs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    }
    fetchJobs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const res = await axiosInstance.get("/jobs/all/search/", { params: query }) 
      setJobs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
  }

  console.log(query)

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
                    setQuery({...query, title: e.target.value})
                  }}
                />
              </section>
              <section className='jobs__searchLocation'>
                <input 
                  type="text" 
                  placeholder='Location'
                  onChange={e => {
                    setQuery({...query, location: e.target.value})
                  }}
                />
              </section>
              <button type='submit' onClick={handleSearch}>
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
        <JobFilter 
          filter="Date Posted" 
          options={["Any Time", "Past Month", "Past Week", "Past 24 hours"]}
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
          param="date"
        />
        <JobFilter 
          filter="Company"
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
          param="company"
        />
        <JobFilter
          filter="Job Type" 
          options={["Full-time", "Part-time", "Contract", "Temporary", "Other", "Volunteer", "Internship"]}
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
          param="type"
        />
        <JobFilter 
          filter="On-site/Remote" 
          options={["Remote", "On site", "Hybrid"]}
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
          param="workPlace"
        />
        <button 
          className='jobFilter__reset'
          onClick={e => setQuery({
            "date":'Any Time',
            "title":"",
            "location":"",
            "company":"",
            "workPlace":[],
            "type":[]
          })}
        >
          Reset
        </button>
      </section>

      <section className='jobs__content'>
        <div className='jobs__contentLeft'>
          <h3>/Static/ 6,822,000+ Jobs in United States</h3>
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