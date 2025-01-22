import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className='w-full h-full overflow-auto'>{props.children}</div>
  );
}

export default Container;