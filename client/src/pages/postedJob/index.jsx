import React from 'react';
import './styles.css';
import NavBar from '../../newComponents/navbar';
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

const PostedJob = () => (
  <>
    <NavBar />
    <main className="postedJob">
      <ManageMenu page="postedJob" />
      <ManageContainer page="postedJob" />
      <ManageAside page="postedJob" />
    </main>
  </>
    );

export default PostedJob;
