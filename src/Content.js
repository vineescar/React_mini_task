import React from 'react';
import { useState } from 'react';
//import colorNames from 'colornames';

const Content = () => {
  const [value, setValues] = useState('');
//  const [hexValue, setHexValues] = useState('');
  const [color, setColor] = useState('black');

  const box = {
    width: '200px',
    height: '200px',
    border: '2px solid #140e0e',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: value,
    color: color
  };

  const handleClick = () => {
    const newColor = color === 'black' ? 'white' : 'black';
    setColor(newColor);
  };

  return (
    <main>
      <div style={box}>
        <p>{value ? value : "Empty Value"}</p>
        {/* <p>{hexValue ? hexValue : null}</p> */}
      </div>
      <div>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <input
            id='search'
            type="text"
            role='search'
            placeholder='Enter Color'
            value={value}
            onChange={(e) => {
              setValues(e.target.value);
             // setHexValues(colorNames(e.target.value));
            }}
          />
        </form>
        <button onClick={handleClick}>Toggle Text Color</button>
      </div>
    </main>
  );
};

export default Content;
