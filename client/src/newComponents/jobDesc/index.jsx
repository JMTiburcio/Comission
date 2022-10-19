import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";

import { format } from "timeago.js";
import { axiosInstance } from '../../config';

function JobDesc({ selectedJob }) {
    const [recruiter, setRecruiter] = useState({})
    const [isApplied, setIsApplied] = useState(false)
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
      if(Object.keys(selectedJob).length){
        const fetchRecruiter = async () => {
          const res = await axiosInstance.get(`/users/?userId=${selectedJob.userId}`) 
          setRecruiter(res.data);
        }
        fetchRecruiter();
      }
    }, [selectedJob]);

    const applyHandler = () => {
      try {
          axiosInstance.put("/jobs/apply/"+selectedJob._id, { userId: user._id })
      } catch (err) {
          console.log(err)
      }
      setIsApplied(!isApplied);
      console.log(isApplied)
  }

    return (
        <>
          {Object.keys(selectedJob).length ? 
          <div className='jobs__contentRight'>
            <h2>{selectedJob.title}</h2>
            <h4>
              {selectedJob.location}  -  {format(selectedJob.createdAt)}  - {selectedJob.applicants.length} applicant{selectedJob.applicants.length !== 1 ? "s" : ""}
            </h4>
            <ul>
              <li><span>{selectedJob.type}</span></li>
              <li><span>/Static/ 201 - 500 employees  -  Staffing and Recruiting</span></li>
              <li><span>See recent hiring trends on <b>{selectedJob.company}</b></span></li>
              <li><span>/Static/ Actively recruiting</span></li>
            </ul>
            <div className='jobs__contentRightButton'>
              <button onClick={applyHandler}>
                Apply
              </button>
              <button>
                Save
              </button>
            </div>

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
            <p>{selectedJob.desc}</p>
          </div> 
          : <div className='jobs__contentRight'></div> 
        }
        </>
    );
}

export default JobDesc;