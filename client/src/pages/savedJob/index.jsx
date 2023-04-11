import React from 'react';
import './styles.css';
import NavBar from '../../newComponents/navbar';
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

const SavedJob = () => (
  <>
    <NavBar />
    <main className="savedJob">
      <ManageMenu page="savedJob" />
      <ManageContainer page="savedJob" />
      <ManageAside page="savedJob" />
    </main>
  </>
    );

export default SavedJob;
