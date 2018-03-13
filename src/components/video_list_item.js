import React from 'react';

const VideoListItem = ({value, onVideoSelect}) => {
  // Identical
  // const video= props.video

  const imageUrl = value.snippet.thumbnails.default.url;
  const videoTitle = value.snippet.title;

  //When user clicks on li, video is selected

  return (
    <li onClick={() => {onVideoSelect(value)}} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} className='media-object'/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{videoTitle}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
