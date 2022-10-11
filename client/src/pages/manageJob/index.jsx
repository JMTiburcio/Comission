import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import { useNavigate } from 'react-router';
import TopBar from '../../components/topbar'
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

function ManageJob() {
    const { user } = useContext(AuthContext);
    const [jobData, setJobData] = useState({})

    console.log(user._id)

    useEffect(() => {
        const fetchJobs = async () => {
          const res = await axiosInstance.get(`/jobs/userjobs/${user._id}`) 
          console.log(res.data)
        //   setJobData(
        //     res.data.sort((p1, p2) => {
        //       return new Date(p2.createdAt) - new Date(p1.createdAt);
        //     }));
        }
        fetchJobs();
      }, [user]);

    console.log(jobData)

    return (
        <>
        <TopBar/>
        <main className='manageJob'>
            <ManageMenu />
            <ManageContainer />
            <ManageAside />
        </main>
        </>
    )
}

export default ManageJob;
