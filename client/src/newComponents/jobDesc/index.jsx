import React, { useState, useEffect } from 'react';
import "./styles.css";

import { format } from "timeago.js";
import { axiosInstance } from '../../config';

function JobDesc({ selectedJob }) {
    const [user, setUser] = useState({})

    // useEffect(() => {
    //   if(selectedJob){
    //     const fetchUser = async () => {
    //       const res = await axiosInstance.get(`/users/${selectedJob.userId}`) 
    //       setUser(res);
    //     }
    //     fetchUser();
    //   }
    // }, [selectedJob]);
    
    // console.log(user)

    return (
        <>
          {selectedJob.selected !== false ? 
          <div className='jobs__contentRight'>
            <h2>{selectedJob.title}</h2>
            <h4>{selectedJob.location}  -  {format(selectedJob.createdAt)}  - /Static 3 applicants/</h4>
            <ul>
              <li><span>{selectedJob.type}</span></li>
              <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
              <li><span>See recent hiring trends on <b>{selectedJob.company}</b></span></li>
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
            <p>{selectedJob.desc}</p>
          </div> 
          : <div className='jobs__contentRight'></div> 
        }
        </>
    );
}

export default JobDesc;