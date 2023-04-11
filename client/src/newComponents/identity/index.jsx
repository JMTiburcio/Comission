import { useContext } from 'react';
import './styles.css';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import { AuthContext } from '../../context/AuthContext';

const Identity = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <section className="card">
      <div className='identity__profile'>
        <img
          alt=""
          className="identity__profileCoverImg"
          src={user.coverPicture ? PF + user.coverPicture : `${PF}person/noCover.png`}
        />
        <a href={`/profile/${user.username}`} className="identity__link">
          <img
            alt=""
            className="identity__profileUserImg"
            src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
          />
        </a>
        <a href={`/profile/${user.username}`} className="identity__link">
          <h3 className='identity__username'>{user.username}</h3>
        </a>
        <span className='identity__profession'>Software Engineer</span>
      </div>
      <a href={`/mynetwork`} className="identity__link">
        <div className='identity_item'>
          <Diversity3Icon  className='identity_itemIcon'/>
          <div className='identity_itemConnection'>
            <span className='identity_itemTitle'>Connections</span>
            <span className='identity_connectionsNumber'>{user?.followings.length}</span>
          </div>
        </div>
      </a>
      <a href={`/postedJobs`} className="identity__link">
        <div className='identity_item'>
          <BookmarkIcon className='identity_itemIcon' />
          <span className='identity_itemTitle'>My items</span>
        </div>
      </a>
      <a href={`/donate`} className="identity__link">
        <div className='identity_item' style={{"borderBottomLeftRadius": 10, "borderBottomRightRadius": 10}}>
          <VolunteerActivismIcon className='identity_itemIcon'/>
          <span className='identity_itemTitle'>Donate to Comission</span>
        </div>
      </a>
    </section>
)};

export default Identity;