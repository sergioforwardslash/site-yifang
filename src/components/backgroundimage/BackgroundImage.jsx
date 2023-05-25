import React, { createContext } from 'react'
import { useState } from 'react';

export const BackgroundImageContext = createContext();

export const BackgroundImageProvider = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState('background.jpg')
  return (
    <BackgroundImageContext.Provider value={{ backgroundImage, setBackgroundImage}}>
        {children}
    </BackgroundImageContext.Provider>
  )
}
