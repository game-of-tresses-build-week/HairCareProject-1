import React from 'react';
import Navigation from './Navigation';
//import HomePage from '../HomePage';
import './App.css';
import background from "../background.jpg";
//import { axiosWithAuth } from '../axiosWithAuth';






class App extends React.Component {
  render() {
    return (
          <div className="App">
            
            <Navigation />
            
            <img 
          src={background}          alt="rainbow hair"
          className="home-image"
        /> 
          </div>
    );
  }

}

export default App;

