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
            <div className='overlay'>
              <h1>13 Reasons Why</h1>
            </div>
          </div>
          <div className='item'>
            <img src={arrow} alt='Arrow' />
            <div className='overlay'>
              <h1>Arrow</h1>
            </div>
          </div>
          <div className='item'>
            <img src={starWarsVII} alt='StarWars seven' />
            <div className='overlay'>
              <h1>Star Wars VII </h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={theBourneU} alt='the Bourne Ultimatum' />
            <div className='overlay'>
              <h1>The Bourne Ultimatum</h1>
            </div>
          </div>
          <div className='item'>
            <img src={theGoodfather} alt='The Goodfather' />
            <div className='overlay'>
              <h1>The Goodfather</h1>
            </div>
          </div>
          <div className='item'>
            <img src={paulAofChrist} alt='Paul Apostol of Christ' />
            <div className='overlay'>
              <h1>Paul Apostol of Christ</h1>
            </div>
          </div>
        </div>
      </div>
    );
   }
  }
              
export default App;