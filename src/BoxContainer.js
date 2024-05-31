import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
   static defaultProps = {
      allColors: [
         '#C43198',
         '#ab5dc0',
         '#3abecf',
         '#52DEE5',
         '#EEE5E9',
         '#62184C',
         '#1BAAB1',
         '#E0C4E8',
         '#210819',
         '#9E6B82',
         '#207883',
         '#F39237',
         '#0E79B2',
         '#E7770D',
         '#519872',
         '#AF7A6D',
         '#C6CA53',
         '#D1D473',
      ],
      numBoxes: 18,
   };

   render() {
      const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
         <Box
            key={Math.random()}
            colors={this.props.allColors}
         />
      ));
      return <div className="BoxContainer">{boxes}</div>;
   }
}

export default BoxContainer;
