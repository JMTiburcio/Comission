import React from 'react';
import './styles.css';

const Friend = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <li className="sidebarFriend">
        <img alt="" className="sidebarFriendImg" src={PF + user.profilePicture} />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    );
};

export default Friend;
