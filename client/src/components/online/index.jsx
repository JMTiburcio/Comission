import React from 'react';
import './styles.css';

const Online = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img alt="" className="rightbarProfileImg" src={PF + user.profilePicture} />
          <span className="rightbarOnline" />
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    );
};

export default Online;
