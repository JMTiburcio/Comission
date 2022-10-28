import React from 'react';
import Topbar from '../../components/topbar';
import Sidebar from '../../components/sidebar';
import Feed from '../../components/feed';
import Rightbar from '../../components/rightbar';

import './styles.css';

const Home = () => (
  <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  </>
  );

export default Home;
