import React, { Component } from 'react';
import './ColorSquare.css';

class ColorSquare extends Component {
   render() {
      return (
         <div
            className="ColorSquare"
            style={{ backgroundColor: this.props.color }}
         ></div>
      );
   }
}

export default ColorSquare;
