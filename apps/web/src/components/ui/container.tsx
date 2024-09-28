import React from 'react';

interface ContainerType {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerType) {
  return <div className={`p-8 py-12 mx-auto ${className}`}>{children}</div>;
}
