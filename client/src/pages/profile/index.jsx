import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { axiosInstance } from '../../config';

import NavBar from '../../newComponents/navbar';
import Sidebar from '../../components/sidebar';
import Feed from '../../components/feed';
import Rightbar from '../../components/rightbar';

import './styles.css';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axiosInstance.get(`/users?username=${username}`);
        setUser(res.data);
    };
    fetchUser();
  }, [username]);
  
  return (
    <>
      <NavBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                alt=""
                className="profileCoverImg"
                src={user.coverPicture ? PF + user.coverPicture : `${PF}person/noCover.png`}
              />
              <img
                alt=""
                className="profileUserImg"
                src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
