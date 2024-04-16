import React from 'react';
import { useExample } from '../ThemeContext/ThemeContext';

const ExampleComponent = () => {
  const example = useExample();

  if (!example) {
    // Handle the case where useExample returns undefined
    return null; // or display a loading state or error message
  }

  const { value, updateValue } = example;

  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};
  
export default ExampleComponent;
