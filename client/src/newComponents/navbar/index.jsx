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

const Item = ({ link, Icon, title, notification }) => {
  return (
    <Link className="topbarIconItem" to={link}>
      <Icon />
      <span className="topbarIconBadge">{notification}</span>
      <span className="topbarIconName">{title}</span>
    </Link>
)}

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
          <Item link={`/`} Icon={HomeIcon} title='Home' notification={1}/>
          <Item link={`/mynetwork`} Icon={GroupIcon} title='My Network' notification={1}/>
          <Item link={`/jobs`} Icon={WorkIcon} title='Jobs' notification={1}/>
          <Item link={`/messaging`} Icon={ChatIcon} title='Messaging' notification={1}/>
          <Item link={`/notifications`} Icon={NotificationsIcon} title='Notifications' notification={1}/>
          
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
