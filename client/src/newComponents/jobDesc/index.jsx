import React, { useState, useEffect } from 'react';
import "./styles.css";
import { axiosInstance } from '../../config';
import { format } from "timeago.js";

function JobDesc() {
    const [job1, setJob1] = useState({});
    
    useEffect(() => {
        const fetchJob = async () => {
            const res = await axiosInstance.get(`/jobs/63239cc014313b526720701a`);
            setJob1(res.data);
        }
        fetchJob();
      }, [])

    return (
        <div className='jobs__contentRight'>
          <h2>{job1.title}</h2>
          <h4>{job1.location}  -  {format(job1.createdAt)}  - /Static 3 applicants/</h4>
          <ul>
            <li><span>{job1.type}</span></li>
            <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
            <li><span>See recent hiring trends on {job1.company}</span></li>
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
          <p>{job1.desc}</p>
        </div>
    );
}

export default JobDesc;