import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import ManageItem from '../manageItem';

function ManageContainer({ page }) {
  const { user } = useContext(AuthContext);
  const [jobData, setJobData] = useState([])
  const [filter, setFilter] = useState(page==='postedJob' ? "Open" : "Applied")
  
  useEffect(() => {
      const fetchJobs = async () => {
        const query = { userId: user._id }
        if(filter === 'Open'){
          query.status = 'open'
          const res = await axiosInstance.get(`/users/postedjobs/`, { params: query }) 
          setJobData(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        } else if(filter === 'Draft') {
          query.status = 'draft'
          const res = await axiosInstance.get(`/users/postedjobs/`, { params: query }) 
          setJobData(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        } else if(filter === 'Close') {
          query.status = 'close'
          // query.status = ''
          const res = await axiosInstance.get(`/users/postedjobs/`, { params: query }) 
          setJobData(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        } else if(filter === 'Applied' || filter === 'Saved'){
          const res = await axiosInstance.get(`/users/appliedjobs/${user._id}`) 
          setJobData(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        }
      }
      fetchJobs();
    }, [user, filter]);

  return (
    <section className='manageContainer__section'>
      <div className='manageContainer'>
        <h1 className='manageContainer__header'>Posted Jobs</h1>
        <div className='manageContainer__filterBar'>
          {
            page === 'postedJob' ?
            <ul className='manageContainer__filterList'>
              <li><button 
                className={"manageContainer__filter"+(filter === "Open" ? '--active' : '')}
                onClick={() => setFilter("Open")}
              >
                Open
              </button></li>
              <li><button 
                className={"manageContainer__filter"+(filter === "Draft" ? '--active' : '')}
                onClick={() => setFilter("Draft")}
              >
                Draft
              </button></li>
              <li><button 
                className={"manageContainer__filter"+(filter === "Close" ? '--active' : '')}
                onClick={() => setFilter("Close")}
              >
                Close
              </button></li>
            </ul>
            :
            <ul className='manageContainer__filterList'>
              {/* <li><button 
                className={"manageContainer__filter"+(filter === "Saved" ? '--active' : '')}
                onClick={() => setFilter("Saved")}
              >
                Saved
              </button></li> */}
              <li><button 
                className={"manageContainer__filter"+(filter === "Applied" ? '--active' : '')}
                onClick={() => setFilter("Applied")}
              >
                Applied
              </button></li>
            </ul>
          }
          
        </div>
        <ul className='manageContainer__resultList'>
          {jobData.map(job => (
            <li key={job._id}>
              <ManageItem job={job} user={user} jobData={jobData} setJobData={setJobData} filter={filter}/>
            </li>  
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ManageContainer;
