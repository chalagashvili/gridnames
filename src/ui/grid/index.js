import React, { useState, useEffect } from 'react';

const COLUMNS = 5;
const ROWS = 5;

const Grid = () => {

  const [starter, setStarter] = useState('');

  useEffect(() => {
    const starter = Math.random() >= 0.5;
    setStarter(starter ? 'red' : 'blue');
  }, []);

  const generateColorsArray = (redAmount, blueAmount, bombAmount, whiteAmount) => {
    let result = [];
    for (let i=0; i<redAmount; i++) {result.push('red');};
    for (let i=0; i<blueAmount; i++) {result.push('blue');};
    for (let i=0; i<bombAmount; i++) {result.push('black');};
    for (let i=0; i<whiteAmount; i++) {result.push('white');};
    return result;
  }

  const generateRandomGrid = (colorsArray) => {
    let result = [];
    for (let i=0; i< COLUMNS; i++) {
      for (let j=0; j< ROWS; j++) {
        const randomColorIndex = Math.floor(Math.random() * colorsArray.length);
        const color = colorsArray[randomColorIndex];
        colorsArray.splice(randomColorIndex, 1);
        result.push(<div className="Grid__item" style={{backgroundColor: color}} key={`${i}-${j}}`} />)
      }
    }
    return result;
  }
  const redAmount = starter === 'red' ? 9 : 8;
  const blueAmount = starter === 'blue' ? 9 : 8;
  const colorsArray = generateColorsArray(redAmount, blueAmount, 1, 7);
  return (
    <React.Fragment>
      <div style={{fontSize: 24, textAlign: 'center'}}>Welcome To Codenames Grid Generator</div>
      <div style={{marginTop: 10}}>
        <span style={{color: starter, fontSize: 18}}>{starter.toUpperCase()}</span> starts the game!
      </div>
      <div className="Grid">
        {generateRandomGrid(colorsArray)}
      </div>
    </React.Fragment>
  );
};

export default Grid;