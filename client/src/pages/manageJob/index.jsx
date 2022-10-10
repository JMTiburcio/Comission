import React from 'react';
import './styles.css';
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
import { useNavigate } from 'react-router';
import TopBar from '../../components/topbar'
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

function ManageJob() {
    const { user } = useContext(AuthContext);
    const [page, setPage] = useState(1);
    const [jobData, setJobData] = useState({})

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
