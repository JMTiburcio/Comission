import { useContext, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import './styles.css';

import { Users } from '../../dummyData';
import { AuthContext } from '../../context/AuthContext';
import Online from '../online';

const RightBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axiosInstance.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axiosInstance.put(`/users/${user._id}/unfollow`, { userId: currentUser._id });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axiosInstance.put(`/users/${user._id}/follow`, { userId: currentUser._id });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper card">
        {user
          ? (
            <>
              {user.username !== currentUser.username && (
              <button className="rightBarFollowButton" onClick={handleClick} type="button">
                {followed ? 'Unfollow' : 'Follow'}
                {followed ? <RemoveIcon /> : <AddIcon />}
              </button>
              )}
              <h4 className="rightbarProfileTitle">User information</h4>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">
                    {user.relationship === 1 && 'Single'}
                    {user.relationship === 2 && 'Married'}
                    {user.relationship > 2 && '-'}
                  </span>
                </div>
              </div>
              <h4 className="rightbarProfileTitle">User friends</h4>
              <div className="rightbarFollowings">
                {friends.map((friend) => (
                  <Link
                    key={friend._id}
                    style={{ textDecoration: 'none' }}
                    to={`/profile/${friend.username}`}
                  >
                    <div className="rightbarFollowing">
                      <img
                        alt=""
                        className="rightbarFollowingImg"
                        src={
                          friend.profilePicture
                            ? PF + friend.profilePicture
                            : `${PF}person/noAvatar.png`
                        }
                      />
                      <span className="rightbarFollowingName">{friend.username}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
)
        : (
          <>
            <div className="birthdayContainer">
              <img alt="" className="birthdayImg" src="assets/gift.png" />
              <span className="birthdayText">
                <b>Joao Marcos</b> and <b>3 other friends</b> have a birthday today.
              </span>
            </div>
            <img alt="" className="rightbarAd" src="/assets/ad.png" />
            {/* <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u) => (
                <Online key={u.id} user={u} />
                    ))}
            </ul> */}
          </>
)}
      </div>
    </div>
  );
};

export default RightBar;
