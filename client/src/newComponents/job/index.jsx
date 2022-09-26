import React, { useContext } from 'react';
import "./styles.css";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";

function Job({ job }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);

    return (
        <div className='job__result'>
            <img src={`${PF}${job.img}`} alt="#" />
            <div className='job__information'>
                <h2>{job.title}</h2>
                <h4>{job.location}</h4>
                <p>/Static/ Avenida Cauaxi</p>
                <span>{format(job.createdAt)}</span>
            </div>
        </div>
    );
}

export default Job;