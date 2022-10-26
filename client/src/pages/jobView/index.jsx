import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { useParams } from 'react-router-dom';
import './styles.css';
import { axiosInstance } from "../../config";
import { format } from "timeago.js";

import TopBar from '../../components/topbar'
import ManageAside from "../../newComponents/manageAside"

function JobView() {
    const jobId = useParams().jobId;
    const [job, setJob] = useState({})
    const [recruiter, setRecruiter] = useState({})
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        if(Object.keys(job).length){
          const fetchRecruiter = async () => {
            const res = await axiosInstance.get(`/users/?userId=${job.userId}`) 
            setRecruiter(res.data);
          }
          fetchRecruiter();
        }
      }, [job, user]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axiosInstance.get(`/jobs/${jobId}`) 
                setJob(res.data);
            } catch(err) {
                console.log(err)
            }
        }
        fetchJobs();
    }, [jobId]);


    return (
      <>
        <TopBar/>
        <main className='jobView'>
          <div className='jobs__contentRight'>
            <h2>{job.title}</h2>
            <h4>
              {/* {job.location}  -  {format(job.createdAt)}  - {job.applicants.length} applicant{job.applicants.length !== 1 ? "s" : ""} */}
            </h4>
            <ul>
              <li><span>{job.type}</span></li>
              <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
              <li><span>See recent hiring trends on <b>{job.company}</b></span></li>
              <li><span>/Static/ Actively recruiting</span></li>
            </ul>
            <div className='jobs__recruiter'>
              <h3>Meet the hiring team</h3>
              <section>
                <img src={recruiter.profilePicture ? PF+recruiter.profilePicture : PF+"person/noAvatar.png"}  alt="#" />
                <div className='jobs__recruiterDesc'>
                  <h5>{recruiter.username}</h5>
                  <p>Tech Recruiter | Analista de Recrutamento e Seleção na Comission</p>
                </div>
                <a href="#">Message</a> 
              </section>
            </div>
            <p>{job.desc}</p>
          </div>
          <ManageAside page="jobView"/>
        </main>

      </>
    )
}

export default JobView;
