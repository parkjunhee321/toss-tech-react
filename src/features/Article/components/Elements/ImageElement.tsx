import React, { FC } from 'react';

interface ImageElementProps {
  fileUrl: string;
  altText: string;
}

const ImageElement: FC<ImageElementProps> = ({ altText, fileUrl }) => {
  const imageTag = <img style={{ width: "100%", borderRadius: "16px" }} src={fileUrl} alt={altText || ""} />;
  return altText
    ? <div>{imageTag}<span className="image-description">{altText}</span></div>
    : imageTag;
};

export default ImageElement;
