import React from 'react';

const ImageFileContent = ({imageUrl, alt}) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ImageFileContent;