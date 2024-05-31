import React, { Component } from 'react';
import ColorSquare from './ColorSquare';
import SquareGen from './SquareGen';
import Box from './Box';
import BoxContainer from './BoxContainer';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <BoxContainer />
         </div>
      );
   }
}

export default App;
