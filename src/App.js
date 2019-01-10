import React, { Component } from 'react';
import './App.css';
import StarWars_img from './StarWars.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={StarWars_img} alt='Han Solo, Chewie, Ben and Luke' />
        <br /><br /><br />
        <div className= 'container'>
          <div className='item'>ReactJS</div>
          <div className='item'>HTML5</div>
          <div className='item'>CSS3</div>
        </div>
        <div className= 'container'>
          <div className='item'>Node.js</div>
          <div className='item'>MongoDB</div>
          <div className='item'>Heroku</div>
        </div>
      </div>
    );
  }
}

export default App;