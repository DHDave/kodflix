import React from 'react';
import Stack from './Stack';
import getTitles from './titles-get';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getTitles().map(stack  => (
            <Stack
            key={stack.id}
            id={stack.id}
            name={stack.name}
            img={stack.img} />
          ))
        }
      </div>
    </div>
  );
}

