import React, { Component } from 'react';
const Video = ({video,onselect}) => {
    return (
    <li onClick={()=>onselect(video)} className='list-group-item'>
    <div className='video-list media'>
    <div className='media-left'>
    <img src={video.snippet.thumbnails.default.url} className="media-object" />

    </div>
    <div className="media-body">
    <h4 className="media-heading">{video.snippet.title}</h4>
  
  </div>
     </div>
    </li> 

    );
}
 
export default Video;