import React from 'react';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config';
import { useParams } from "react-router";

import Topbar from '../../components/topbar';
import Sidebar from "../../components/sidebar";
import Feed from "../../components/feed";
import Rightbar from "../../components/rightbar";

import "./styles.css"


function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axiosInstance.get(`/users?username=${username}`);
        setUser(res.data);
    };
    fetchUser();
  }, [username])
  
  return (
    <>
        <Topbar/>
        <div className='profile'>
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img 
                            src={user.coverPicture ? PF+user.coverPicture : PF+"person/noCover.png"} 
                            alt="" 
                            className="profileCoverImg" 
                        />
                        <img 
                            src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} 
                            alt="" 
                            className="profileUserImg" 
                        />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
            </div>
        </div>
    </>
  );
}

export default Profile;