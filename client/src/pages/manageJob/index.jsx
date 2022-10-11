import React from 'react';
import './styles.css';
import TopBar from '../../components/topbar'
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

function ManageJob() {
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
