import { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../../config';
import './styles.css';

import { AuthContext } from '../../context/AuthContext';

import Share from '../share';
import Post from '../post';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axiosInstance.get(`/posts/profile/${username}`)
      : await axiosInstance.get(`posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="Feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        { posts.map((p) => (
          <Post key={p._id} post={p} />
            ))}
      </div>
    </div>
  );
};

export default Feed;
