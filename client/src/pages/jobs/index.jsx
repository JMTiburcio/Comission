import React, { useState, useEffect } from 'react';
import './styles.css';
import { axiosInstance } from '../../config';
import { format } from "timeago.js";

function Jobs() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [job, setJob] = useState({});
  const [job2, setJob2] = useState({});
  const [job3, setJob3] = useState({});

  useEffect(() => {
      const fetchJobs = async () => {
          const res = await axiosInstance.get(`/jobs/63239cc014313b526720701a`);
          setJob(res.data);
      }
      fetchJobs();
    }, [])
  
  useEffect(() => {
    const fetchJobs = async () => {
        const res = await axiosInstance.get(`/jobs/6323a262812db5ae2a516440`);
        setJob2(res.data);
    }
    fetchJobs();
  }, [])

  useEffect(() => {
    const fetchJobs = async () => {
        const res = await axiosInstance.get(`/jobs/6323a283812db5ae2a516442`);
        setJob3(res.data);
    }
    fetchJobs();
  }, [])

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
          <a href="#">Join now</a>
          <a href="#">Sign In</a>
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
            <li>
              <div className='jobs__result_first'>
                <img src={`${PF}${job.img}`} alt="#" />
                <div className='jobs__information'>
                  <h2>{job.title}</h2>
                  <h4>{job.location}</h4>
                  <p>/Static/ Avenida Cauaxi</p>
                  <span>{format(job.createdAt)}</span>
                </div>
              </div>
            </li>
            <li>
              <div className='jobs__result'>
                <img src={`${PF}${job2.img}`} alt="#" />
                <div className='jobs__information'>
                  <h2>{job2.title}</h2>
                  <h4>{job2.location}</h4>
                  <p>/Static/ Avenida Cauaxi</p>
                  <span>{format(job2.createdAt)}</span>
                </div>
              </div>
            </li>
            <li>
              <div className='jobs__result'>
                <img src={`${PF}${job3.img}`} alt="#" />
                <div className='jobs__information'>
                  <h2>{job3.title}</h2>
                  <h4>{job3.location}</h4>
                  <p>/Static/ Avenida Cauaxi</p>
                  <span>{format(job3.createdAt)}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className='jobs__contentRight'>
          <h2>{job.title}</h2>
          <h4>{job.location}  -  {format(job.createdAt)}  - /Static 3 applicants/</h4>
          <ul>
            <li><span>{job.type}</span></li>
            <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
            <li><span>See recent hiring trends on {job.company}</span></li>
            <li><span>/Static/ Actively recruiting</span></li>
          </ul>
          <div className='jobs__contentRightButton'>
            <a href="#">Apply</a>
            <a href="#">Save</a>
          </div>

          <div className='jobs__recruiter'>
            <h3>Meet the hiring team</h3>
            <section>
              <img src="#" alt="#" />
              <div className='jobs__recruiterDesc'>
                <h5>João Tiburcio</h5>
                <p>Tech Recruiter | Analista de Recrutamento e Seleção na Comission</p>
              </div>
              <a href="#">Message</a> 
            </section>
          </div>
          <p>{job.desc}</p>
          
        </div>
      </section>
    </div>
  );
}

export default Jobs;