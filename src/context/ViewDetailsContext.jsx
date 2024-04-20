import React, { createContext, useState } from "react";

const NumberContext = createContext({
  number: 0,
  setNumber: () => {},
});

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(1);

  const handleSetNumber = (newNumber) => {
    setNumber(newNumber);
  };

  const value = { number, setNumber: handleSetNumber };

  return (
    <NumberContext.Provider value={value}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContext;
