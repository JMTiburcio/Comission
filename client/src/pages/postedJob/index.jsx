import React from 'react';
import './styles.css';
import TopBar from '../../components/topbar';
import ManageMenu from '../../newComponents/manageMenu';
import ManageContainer from '../../newComponents/manageContainer';
import ManageAside from '../../newComponents/manageAside';

const PostedJob = () => (
  <>
    <TopBar />
    <main className="postedJob">
      <ManageMenu page="postedJob" />
      <ManageContainer page="postedJob" />
      <ManageAside page="postedJob" />
    </main>
  </>
    );

export default PostedJob;
