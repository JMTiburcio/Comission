import React from 'react';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../config';
import { AuthContext } from "../../context/AuthContext";
import './styles.css';

function CreateJob() {
    const { user } = useContext(AuthContext);
    const title = useRef();
    const company = useRef();
    const workPlace = useRef();
    const location = useRef();
    const type = useRef();
    const navigate = useNavigate();


    const handleClick = async (e) => {
        e.preventDefault();
        
        const job = {
            userId: user._id,
            title: title.current.value,
            company: company.current.value,
            workPlace: "On site",
            location: location.current.value,
            type: "Full-time",
            img: "post/4.jpeg",
        }
        try {
            await axiosInstance.post("/jobs", job);
            navigate("/createJobDesc");
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <section className='createJob__container'>
        <div className='createJob__content'>
            <h1>Find a greate hire, fast</h1>
            <p>Rated #1 in increasing quality of hire</p>
            <form className='createJob__form' action="">
                <div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job title</label>
                        <input type="text" name="" id="" ref={title}/>
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Company</label>
                        <input type="text" name="" id="" ref={company}/>
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Workplace type</label>
                        <select name="" id="" ref={workPlace}>
                            <option value="">On site</option>
                            <option value="">Hybrid</option>
                            <option value="">Remote</option>
                        </select>
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job location</label>
                        <input type="text" name="" id="" ref={location}/>
                    </div>
                    <div className='createJob__formOption'>
                        <label htmlFor="">Job type</label>
                        <select name="" id="">
                            <option value="">Full-time</option>
                            <option value="">Part-time</option>
                            <option value="">Contract</option>
                            <option value="">Temporary</option>
                            <option value="">Other</option>
                            <option value="">Volunteer</option>
                            <option value="">Internship</option>
                        </select>
                    </div>
                </div>
                <button type='submit' onClick={handleClick}>Get started for free</button>
            </form>
        </div>
    </section>
  )
}

export default CreateJob;
