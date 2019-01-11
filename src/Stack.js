import React from 'react';

export default function Stack(props) {
    return (
        <div className='item'>
          <img src={props.img} alt={props.name} />
          <div className='overlay'>
            <h3>{props.name}</h3>
          </div>
        </div >
      );
  }