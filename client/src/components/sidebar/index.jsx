import React from 'react';
import "./styles.css";

import Friend from "../friend/index";
import {Users} from "../../dummyData";

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function SideBar() {
  return (
    <div className='Sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Chat</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <GroupIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BookmarkIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutlineIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutlineIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className='sidebarIcon'/>
              <span className="sidebarListIconText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <Friend key={u.id} user={u}/>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default SideBar;