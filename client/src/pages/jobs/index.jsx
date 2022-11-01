import { useState, useEffect } from 'react';
import './styles.css';
import { axiosInstance } from '../../config';
import Job from '../../newComponents/job';
import JobDesc from '../../newComponents/jobDesc';
import JobFilter from '../../newComponents/jobFilter';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(false);
  const [query, setQuery] = useState({
    date: 'Any Time',
    title: '',
    location: '',
    company: '',
    workPlace: [],
    type: []
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axiosInstance.get('/jobs/all/search/');
      setJobs(
        res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
    };
    fetchJobs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const res = await axiosInstance.get('/jobs/all/search/', { params: query });
      setJobs(
        res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setQuery({
      date: 'Any Time',
      title: '',
      location: '',
      company: '',
      workPlace: [],
      type: []
    });
    
    const res = await axiosInstance.get('/jobs/all/search/');
      setJobs(
        res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
  };

  return (
    <div className="jobs">
      <header className="jobs__header">
        <nav className="jobs__headerNav">
          <h1 className="jobs__comission">
            Comission
          </h1>
          <section className="jobs__searchBar">
            <form className="jobs__headerForm">
              <section className="jobs__searchJob">
                <input
                  onChange={(e) => {
                    setQuery({ ...query, title: e.target.value });
                  }}
                  placeholder="Search job"
                  type="text"
                />
              </section>
              <section className="jobs__searchLocation">
                <input
                  onChange={(e) => {
                    setQuery({ ...query, location: e.target.value });
                  }}
                  placeholder="Location"
                  type="text"
                />
              </section>
              <button onClick={handleSearch} type="submit">
                Search
              </button>
            </form>
          </section>
          <a href="/">Home</a>
          <a href="/createJob">Create Job</a>
          <a href="/postedJobs">Manage Jobs</a>
        </nav>
      </header>

      <section className="jobs__sectionFilter">
        <JobFilter
          filter="Date Posted"
          handleSearch={handleSearch}
          options={['Any Time', 'Past Month', 'Past Week', 'Past 24 hours']}
          param="date"
          query={query}
          setQuery={setQuery}
        />
        <JobFilter
          filter="Company"
          handleSearch={handleSearch}
          param="company"
          query={query}
          setQuery={setQuery}
        />
        <JobFilter
          filter="Job Type"
          handleSearch={handleSearch}
          options={['Full-time', 'Part-time', 'Contract', 'Temporary', 'Other', 'Volunteer', 'Internship']}
          param="type"
          query={query}
          setQuery={setQuery}
        />
        <JobFilter
          filter="On-site/Remote"
          handleSearch={handleSearch}
          options={['Remote', 'On site', 'Hybrid']}
          param="workPlace"
          query={query}
          setQuery={setQuery}
        />
        <button
          className="jobFilter__reset"
          onClick={handleReset}
          type="button"
        >
          Reset
        </button>
      </section>

      <section className="jobs__content">
        <div className="jobs__contentLeft">
          <h3>6,822,000+ Jobs in United States</h3>
          <ul className="jobs__resultList">
            { jobs.map((p) => (
              <li
                key={p._id}
                onClick={() => { setSelectedJob(p); }}
              >
                <Job job={p} selectedJob={selectedJob} />
              </li>
            ))}
          </ul>
        </div>
        <JobDesc jobs={jobs} selectedJob={selectedJob} setJobs={setJobs} setSelectedJob={setSelectedJob} />
      </section>
    </div>
  );
};

export default Jobs;
