import React from 'react';
import "./styles.css"

import { Users } from "../../dummyData";
import Online from '../online';

function RightBar({profile}) {
  
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
              <img src="assets/gift.png" alt="" className="birthdayImg" />
              <span className='birthdayText'>
                <b>Joao Marcos</b> and <b>3 other friends</b> have a birthday today.
              </span>
            </div>
            <img className='rightbarAd' src="/assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u) =>(
                <Online key={u.id} user={u}/>
              ))}
            </ul>

      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarProfileTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Beijing</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">São Paulo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarProfileTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
      <div className='rightbar'>
          <div className="rightbarWrapper">
            {profile ? <ProfileRightBar/> : <HomeRightBar/>}
          </div>
      </div>
  );
}

export default RightBar;