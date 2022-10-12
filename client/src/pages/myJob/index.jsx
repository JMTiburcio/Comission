import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import TopBar from '../../components/topbar'
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

function MyJob() {
    const jobId = useParams().jobId;

    return (
        <>
        <TopBar/>
        <main className='myJob'>
            <ManageMenu />
            <ManageContainer />
            <ManageAside />
        </main>
        </>
    )
}

export default MyJob;
