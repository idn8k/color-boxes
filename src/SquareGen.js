import React, { Component } from 'react';
import ColorSquare from './ColorSquare';
import './App.css';

class SquareGen extends Component {
   static defaultProps = {
      colors: [
         { colIdx: 0, hexCode: '#C43198' },
         { colIdx: 1, hexCode: '#ab5dc0' },
         { colIdx: 2, hexCode: '#3abecf' },
         { colIdx: 3, hexCode: '#52DEE5' },
         { colIdx: 4, hexCode: '#EEE5E9' },
         { colIdx: 5, hexCode: '#62184C' },
         { colIdx: 6, hexCode: '#1BAAB1' },
         { colIdx: 7, hexCode: '#E0C4E8' },
         { colIdx: 8, hexCode: '#210819' },
         { colIdx: 9, hexCode: '#9E6B82' },
         { colIdx: 10, hexCode: '#207883' },
         { colIdx: 11, hexCode: '#F39237' },
         { colIdx: 12, hexCode: '#0E79B2' },
         { colIdx: 13, hexCode: '#E7770D' },
         { colIdx: 14, hexCode: '#519872' },
         { colIdx: 15, hexCode: '#AF7A6D' },
         { colIdx: 16, hexCode: '#C6CA53' },
         { colIdx: 17, hexCode: '#D1D473' },
      ],
   };
   constructor(props) {
      super(props);
      this.state = {
         hexCode: '#000',
      };
      this.handleClick = this.handleClick.bind(this);
   }

   setColor() {
      const rand = Math.floor(Math.random() * this.props.colors.length);
      console.log(rand);
   }

   handleClick(e) {
      this.setColor();
      console.log('Clicked');
   }

   render() {
      return (
         <div className="SquareGen">
            <ColorSquare
               onClick={this.handleClick}
               color={this.state.hexCode}
            />
         </div>
      );
   }
}

export default SquareGen;
