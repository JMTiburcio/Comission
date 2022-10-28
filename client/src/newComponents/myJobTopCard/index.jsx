import React from 'react';
import './styles.css';
import { format } from 'timeago.js';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MyJobTopCard = ({ job }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="myJob__topCard">
      <div className="myJob__info">
        <div className="myJob__imgWrapper">
          <img alt="#" className="myJob__img" src={`${PF}${job.img}`} />
        </div>
        <div className="myJob__content">
          <div className="myJob__desc">
            <span className="myJob__title">{job.title}</span>
            <span className="myJob__company">{job.company} • {job.location}</span>
          </div>
          <div className="myJob__draft">
            <span className="myJob__draftTime"><strong>Draft</strong> • Created {format(job.createdAt)}</span>
          </div>
        </div>
        <div className="myJob__action">
          <a className="myJob__post" href={`/myJob/form/${job._id}`}>Complete Draft</a>
          <button className="myJob__button" type="button">
            <MoreHorizIcon style={{ fontSize: 24 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyJobTopCard;
