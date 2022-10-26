import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { axiosInstance } from "../../config";
import TopBar from '../../components/topbar'
import MyJobTopCard from '../../newComponents/myJobTopCard';
import MyJobContainer from '../../newComponents/myJobContainer';
import MyJobAside from '../../newComponents/myJobAside';

function Applicants() {
    const jobId = useParams().jobId;
    const [job, setJob] = useState({})

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
        <main className='applicants'>
            <MyJobTopCard job={job}/>
            <section className='applicants__container'>
                <MyJobContainer job={job}/>
                <MyJobAside job={job}/>
            </section>
        </main>
        </>
    )
}

export default Applicants;