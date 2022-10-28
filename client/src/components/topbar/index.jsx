import './styles.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AuthContext } from '../../context/AuthContext';

const TopBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="Logo">Comission</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="SearchBar">
          <SearchIcon className="SearchIcon" />
          <input className="SearchInput" placeholder="Search for friends, posts or video" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link style={{ textDecoration: 'none' }} to="/jobs">
            <span className="topbarLink">Jobs</span>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/createJob">
            <span className="topbarLink">Create a Job</span>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/postedJobs">
            <span className="topbarLink">Manage Jobs</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            alt=""
            className="topbarImg"
            src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
