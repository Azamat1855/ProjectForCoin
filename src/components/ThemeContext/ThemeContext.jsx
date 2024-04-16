// src/context/ExampleContext.js    
import React, { createContext, useContext, useState } from 'react';

const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [value, setValue] = useState('');

  const updateValue = newValue => {
    setValue(newValue);
  };

  return (
    <ExampleContext.Provider value={{ value, updateValue }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExample = () => useContext(ExampleContext);
