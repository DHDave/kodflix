import React, { Component } from 'react';
import './App.css';
import thirteenReasonsWhyImage from './images/13 Reason Why.jpeg';
import arrow from './images/Arrow.jpeg';
import starWarsVII from './images/StarWarsVII.jpeg';
import theBourneU from './images/TheBourneU.jpeg';
import theGoodfather from './images/TheGoodfather.jpeg';
import paulAofChrist from './images/PaulAofChrist.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={thirteenReasonsWhyImage} alt='13 Reasons Why' />
          </div>
          <div className='item'>
            <img src={arrow} alt='Arrow' />
          </div>
          <div className='item'>
            <img src={starWarsVII} alt='StarWars seven' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={theBourneU} alt='the Bourne Ultimatum' />
          </div>
          <div className='item'>
            <img src={theGoodfather} alt='The Goodfather' />
          </div>
          <div className='item'>
            <img src={paulAofChrist} alt='Paul Apostol of Christ' />
          </div>
        </div>
      </div>
    );
   }
  }
              
export default App;