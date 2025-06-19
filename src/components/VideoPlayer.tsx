import React from 'react';

interface VideoThumbnailProps {
  thumbnailSrc: string;
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoThumbnailProps> = ({ thumbnailSrc, videoUrl }) => {
  const handleClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <img
      src={thumbnailSrc}
      alt="Video Thumbnail"
      style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
      onClick={handleClick}
      className='md:w-[90%]! lg:w-[88%]! self-center'
    />
  );
};

export default VideoPlayer;
