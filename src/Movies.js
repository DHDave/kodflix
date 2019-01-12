import React from 'react';
import Stack from './Stack';
import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

export default function Movies(){
    return (
      <div>  
        <div className='container'>
          <Stack name='13 Reasons Why' img={thirteenReasonsWhyImage} />
          <Stack name='Arrow' img={arrow} />
          <Stack name='Star Wars VII' img={starWarsVII} />
        </div>
        <div className='container'>
          <Stack name='The Bourne Ultimatum' img={theBourneU} />
          <Stack name='The Goodfather' img={theGoodfather} />
          <Stack name='Paul Apostol of Christ' img={paulAofChrist} />
        </div>
      </div>
    );
  }