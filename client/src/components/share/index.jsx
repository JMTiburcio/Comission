import { useContext, useRef, useState } from 'react';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CancelIcon from '@mui/icons-material/Cancel';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import './styles.css';

const Share = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value
        };

        if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append('name', fileName);
        data.append('file', file);
        newPost.img = fileName;
            try {
            await axiosInstance.post('/upload', data);
            } catch (err) {
              console.log(err);
            }
        }
        try {
        await axiosInstance.post('/posts', newPost);
        window.location.reload();
        } catch (err) {
          console.log(err);
        }
    };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            alt=""
            className="shareProfileImg"
            src={user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`}
          />
          <input
            ref={desc}
            className="shareInput"
            placeholder={`What's in your mind ${user.username}?`}
          />
        </div>
        <hr className="shareHr" />
        {file && (
        <div className="shareImgContainer">
          <img alt="" className="shareImg" src={URL.createObjectURL(file)} />
          <CancelIcon className="shareCancelImg" onClick={() => setFile(null)} />
        </div>
            )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <PermMediaIcon className="shareIcon" htmlColor="tomato" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                accept=".png, .jpeg, .jpg"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
                type="file"
              />
            </label>
            <div className="shareOption">
              <LabelIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon className="shareIcon" htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
};

export default Share;
