import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1 className={`font-magilio text-heading text-black ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
