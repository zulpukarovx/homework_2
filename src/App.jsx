import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [square1Color, setSquare1Color] = useState('red')
  const [square2Color, setSquare2Color] = useState('blue')

  const handleClick = () => {
    setSquare1Color((prevColor) => {
      setSquare2Color(prevColor)
      return square2Color
    });
  };

  return (
    <div className='wrapper'>
      <div
        className="square"
        style={{ backgroundColor: square1Color }}
        onClick={handleClick}
      ></div>
      <div 
      className="square" 
      style={{ backgroundColor: square2Color }}
      onClick={handleClick}
      ></div>
    </div>
  );
}

export default App