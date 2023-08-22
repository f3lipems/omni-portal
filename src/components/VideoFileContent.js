import React from 'react';

const VideoFileContent = ({ videoUrl}) => {
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoFileContent;