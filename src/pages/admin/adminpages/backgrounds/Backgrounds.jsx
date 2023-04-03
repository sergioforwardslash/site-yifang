import React from 'react'
import { useState, useEffect } from 'react';
import "./backgrounds.css"

import { images } from '../../../../constants'

const Backgrounds = () => {
  const [selectedBackground, setSelectedBackground] = useState('background.jpg');

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBackground})`;
  }, [selectedBackground]);

  return (
    <div className='bMain'>
      <button onClick={() => handleBackgroundChange(images.background)}>Background 1</button>
      {/* <button onClick={() => handleBackgroundChange('fruiteaLime.jpg')}>Background 2</button> */}
      {/* <button onClick={() => handleBackgroundChange('menutea.png')}>Background 3</button> */}
    </div>
  );
};

export default Backgrounds;