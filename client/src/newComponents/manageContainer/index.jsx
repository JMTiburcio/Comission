import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import ManageItem from '../manageItem';

function ManageContainer({ }) {
  const { user } = useContext(AuthContext);
  const [jobData, setJobData] = useState([])

  useEffect(() => {
      const fetchJobs = async () => {
        const res = await axiosInstance.get(`/jobs/userjobs/${user._id}`) 
        setJobData(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          }));
      }
      fetchJobs();
    }, [user]);

  return (
    <section className='manageContainer__section'>
      <div className='manageContainer'>
        <h1 className='manageContainer__header'>Posted Jobs</h1>
        <div className='manageContainer__filterBar'>
          <ul className='manageContainer__filterList'>
            <li><button className='manageContainer__button'>Draft</button></li>
            <li><button className='manageContainer__button'>Filter</button></li>
            <li><button className='manageContainer__button'>Save</button></li>
          </ul>
        </div>
        <ul className='manageContainer__resultList'>
          {jobData.map(job => (
            <li key={job._id}>
              <ManageItem job={job} user={user} jobData={jobData} setJobData={setJobData} />
            </li>  
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ManageContainer;
