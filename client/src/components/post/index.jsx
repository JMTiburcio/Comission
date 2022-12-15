import { useState, useEffect, useContext } from 'react';
import './styles.css';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axiosInstance.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);

    const likeHandler = () => {
        try {
          axiosInstance.put(`/posts/${post._id}/like`, { userId: currentUser._id });
        } catch (err) {
          console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
    return (
      <div className="post card">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
                <img
                  alt=""
                  className="postProfileImg"
                  src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
                />
              </Link>
              <span className="postUsername">
                {user.username}
              </span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img alt="" className="postImg" src={PF + post.img} />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img alt="" className="postLikeIcon" onClick={likeHandler} src={`${PF}like.png`} />
              <img alt="" className="postLikeIcon" onClick={likeHandler} src={`${PF}heart.png`} />
              <span className="postLikeCounter">{like} people liked</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Post;
