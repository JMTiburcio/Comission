import React from 'react';
import "./styles.css";
import { format } from "timeago.js";

function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img 
                className='messageImg'
                src="https://s2.glbimg.com/JAZaJrRJpVfXRP1BZwbAsUcuYLw=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/R/X/Lj3rwSQpm7BgzSEvJ1Mw/macarrao-simples-como-fazer.jpg" 
                alt="" 
            />
            <p className='messageText'>
              {message.text}
            </p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>

    </div>
  )
}

export default Message;