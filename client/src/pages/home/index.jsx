import React from 'react';
// import Topbar from '../../components/topbar';
import Sidebar from '../../components/sidebar';
import Feed from '../../components/feed';
import Rightbar from '../../components/rightbar';
import NavBar from '../../newComponents/navbar';

import './styles.css';

const Home = () => (
  <>
    <NavBar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  </>
  );

export default Home;
