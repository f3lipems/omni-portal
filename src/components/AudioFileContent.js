import React from 'react';
import '../styles/Components.css'
const AudioFileContent = ({ audioUrl }) => {
  return (
    <div className='center-content'>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg"  />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default AudioFileContent;