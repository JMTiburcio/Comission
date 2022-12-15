import './styles.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link style={{ textDecoration: 'none' }} to="/">
          <span className="Logo">Comission</span>
        </Link>
        <div className="SearchBar">
          <SearchIcon className="SearchIcon" />
          <input className="SearchInput" placeholder="Search" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <Link className="topbarIconItem" to={`/`}>
            <HomeIcon />
            <span className="topbarIconBadge">1</span>
            <span className="topbarIconName">Home</span>
          </Link>
          <Link className="topbarIconItem" to={`/mynetwork`}>
            <GroupIcon />
            <span className="topbarIconBadge">1</span>
            <span className="topbarIconName">My Network</span>
          </Link>
          <Link className="topbarIconItem" to={`/jobs`}>
            <WorkIcon />
            <span className="topbarIconBadge">1</span>
            <span className="topbarIconName">Jobs</span>
          </Link>
          <Link className="topbarIconItem" to={`/messaging`}>
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
            <span className="topbarIconName">Messaging</span>
          </Link>
          <Link className="topbarIconItem" to={`/notifications`}>
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
            <span className="topbarIconName">Notifications</span>
          </Link>
          <Link className="topbarIconItem" to={`/profile/${user.username}`}>
            <img
              alt=""
              className="topbarImg"
              src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
              />
            <span className="topbarIconName">Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
