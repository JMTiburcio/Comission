import { useState, useContext, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import InitialForm from '../../newComponents/initialForm';
import CreateJobDesc from '../../newComponents/createJobDesc';
import CreateJobAssess from '../../newComponents/createJobAssess';

import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import NavBar from '../../newComponents/navbar';

const UpdateJob = () => {
    const { user } = useContext(AuthContext);
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const [jobData, setJobData] = useState({
        userId: user._id,
        title: '',
        company: '',
        workPlace: 'On site',
        location: '',
        type: 'Full-time',
        desc: '',
        skills: [{ id: 1, item: 'SQL Database' },
                { id: 2, item: 'Python' },
                { id: 3, item: 'English' }],
        hearAbout: '',
        applicantContact: {
            option: 'Email',
            address: ''
        },
        screeningQuestions: [{
            id: 1,
            mustHave: false,
            response: 'Boolean',
            answer: 'Yes',
            question: ''
        }],
        qualification: false,
        img: 'job.png'
    });
    
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axiosInstance.get(`/jobs/${jobId}`);
                setJobData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchJobs();
    }, [jobId]);

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(jobData);
        try {
            await axiosInstance.put(`/jobs/${jobId}`, jobData);
            navigate('/myItems');
        } catch (err) {
            console.log(err);
        }
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    return (
      <>
        <NavBar />
        {page === 1 && <InitialForm jobData={jobData} nextPage={nextPage} setJobData={setJobData} />}
        {page === 2 && <CreateJobDesc jobData={jobData} nextPage={nextPage} previousPage={previousPage} setJobData={setJobData} />}
        {page === 3 && <CreateJobAssess jobData={jobData} previousPage={previousPage} setJobData={setJobData} submitForm={submitForm} />}
      </>
    );
};

export default UpdateJob;
