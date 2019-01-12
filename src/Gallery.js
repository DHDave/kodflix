import React from 'react';
import Stack from './Stack';
import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

export default function Gallery(){
    return (
      <div>  
        <div className='container'>
          <Stack id='thirteen' name='13 Reasons Why' img={thirteenReasonsWhyImage} />
          <Stack id='arrow' name='Arrow' img={arrow} />
          <Stack id='starwarsvii' name='Star Wars VII' img={starWarsVII} />
        </div>
        <div className='container'>
          <Stack id='thebourneultimatum' name='The Bourne Ultimatum' img={theBourneU} />
          <Stack id='thegoodfather' name='The Goodfather' img={theGoodfather} />
          <Stack id='paulapostolofchrist' name='Paul Apostol of Christ' img={paulAofChrist} />
        </div>
      </div>
    );
  }