import React from 'react';

interface ImageProps {
  source: string;
  width?: string;
  height?: string;
  alt?: string;
  top?: string;
  borderRadius?: string;
  left?: string;
  className?: string;
}

export const Image = (props: ImageProps) => {
  return (
    <img
      src={props.source}
      height={props.height}
      width={props.width}
      alt={props.alt}
      className={props.className}
    ></img>
  );
};
