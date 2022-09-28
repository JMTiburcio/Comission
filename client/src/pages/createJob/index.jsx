import React from 'react';
import './styles.css';
import InitialForm from '../../newComponents/initialForm';
import CreateJobDesc from "../../newComponents/createJobDesc";
import CreateJobAssess from "../../newComponents/createJobAssess";
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import { useNavigate } from 'react-router';

function CreateJob() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [jobData, setJobData] = useState({
        userId: user._id,
        title: "",
        company: "",
        workPlace: "On site",
        location: "",
        type: "Full-time",
        desc: "",
        img: "job.png",
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/jobs", jobData);
            navigate('/jobs')
        } catch (err) {
            console.log(err);
        }
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    return (
        <>
        {page === 1 ? <InitialForm nextPage={nextPage} jobData={jobData} setJobData={setJobData}/> 
            : page === 2 ? <CreateJobDesc nextPage={nextPage} previousPage={previousPage} jobData={jobData} setJobData={setJobData}/> 
                : <CreateJobAssess previousPage={previousPage} submitForm={submitForm}/>
        }
        </>
    )
}

export default CreateJob;
