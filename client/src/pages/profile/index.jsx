import React from 'react';

import Topbar from '../../components/topbar';
import Sidebar from "../../components/sidebar";
import Feed from "../../components/feed";
import Rightbar from "../../components/rightbar";

import "./styles.css"


function profile() {
  return (
    <>
        <Topbar/>
        <div className='profile'>
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img 
                            src="assets/post/3.jpeg" 
                            alt="" 
                            className="profileCoverImg" 
                        />
                        <img 
                            src="assets/person/7.jpeg" 
                            alt="" 
                            className="profileUserImg" 
                        />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">João Marcos</h4>
                        <span className="profileInfoDesc">Sleeping</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
  );
}

export default profile;