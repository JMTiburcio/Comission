import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config';
import './styles.css';

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axiosInstance.get(`/users/friends/${currentId}`);
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    const res = await axiosInstance.get(`/conversations/find/${currentId}/${user._id}`);
    setCurrentChat(res.data);
  };

  return (
    <div className="chatOnline">
      <ul>
        {onlineFriends.map((o) => (
          <div key={o._id} className="chatOnlineFriend">
            <button onClick={() => handleClick(o)} type="button">
              <div className="chatOnlineImgContainer">
                <img
                  alt=""
                  className="chatOnlineImg"
                  src={o?.profilePicture ? PF + o.profilePicture : `${PF}person/noAvatar.png`}
                />
                <div className="chatOnlineBadge" />
              </div>
              <span className="chatOnlineName">{o?.username}</span>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatOnline;
