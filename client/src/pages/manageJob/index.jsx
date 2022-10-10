import React from 'react';
import './styles.css';
import InitialForm from '../../newComponents/initialForm';
import CreateJobDesc from "../../newComponents/createJobDesc";
import CreateJobAssess from "../../newComponents/createJobAssess";
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import { useNavigate } from 'react-router';
import TopBar from '../../components/topbar'

function ManageJob() {
    const { user } = useContext(AuthContext);
    const [page, setPage] = useState(1);
    const [jobData, setJobData] = useState({})

    return (
        <>
        <TopBar/>
        <main className='manage'>
            <section className='manage__menu'>
                <h2>My item</h2>
                <div><a href="">Posted Jobs</a></div>
                <div><a href="">My Jobs</a></div>
            </section>
            <section className='manage__container'>
                <h1>Posted Jobs</h1>
                <div>
                    <ul className='manage__filterList'>
                        <li><button>Draft</button></li>
                        <li><button>Filter</button></li>
                        <li><button>Save</button></li>
                    </ul>
                </div>
                <ul className='manage__resultList'>
                    <li>
                        <div className='manage__resultItem'>
                            <div className='manage__resultImg'><img src="#" alt="#" /></div>
                            <div className='manage__resultContent'>Content</div>
                            <div className='manage__resultAction'>dropdown menu</div>
                        </div>
                    </li>
                    <li>
                        <div className='manage__resultItem'>
                            <div className='manage__resultImg'><img src="#" alt="#" /></div>
                            <div className='manage__resultContent'>Content</div>
                            <div className='manage__resultAction'>dropdown menu</div>
                        </div>
                    </li>
                </ul>
            </section>
            <aside>
                <a href="#">Post a free job</a>
                <div>
                    <p>Save up to 35% by purchasing job posting budget in advance.</p>
                    <a href="#">Get discount</a>
                </div>
                <div>
                    <p>Billing information</p>
                    <a href="#">Payment method</a>
                    <a href="#">Purchase history</a>
                </div>
            </aside>
        </main>
        </>
    )
}

export default ManageJob;
