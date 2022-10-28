import React from 'react';
import './styles.css';
import TopBar from '../../components/topbar';
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

const SavedJob = () => (
  <>
    <TopBar />
    <main className="savedJob">
      <ManageMenu page="savedJob" />
      <ManageContainer page="savedJob" />
      <ManageAside page="savedJob" />
    </main>
  </>
    );

export default SavedJob;
