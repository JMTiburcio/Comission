import React from 'react';
import './styles.css';
import TopBar from '../../components/topbar'
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

function MyItems() {
    return (
        <>
        <TopBar/>
        <main className='myItems'>
            <ManageMenu />
            <ManageContainer />
            <ManageAside />
        </main>
        </>
    )
}

export default MyItems;
