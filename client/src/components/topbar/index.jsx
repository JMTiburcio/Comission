import "./styles.css";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function TopBar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="Logo">Comission</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="SearchBar">
          <SearchIcon className='SearchIcon'/>
          <input placeholder='Search for friends, posts or video' className="SearchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/jobs" style={{textDecoration:"none"}}>
            <span className="topbarLink">Jobs</span>
          </Link>
          <Link to="/createJob" style={{textDecoration:"none"}}>
          <span className="topbarLink">Create a Job</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img 
            src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} 
            alt="" 
            className="topbarImg" 
          />
        </Link>
      </div>
    </div>
  );

}

export default TopBar;