import React from 'react';
import { useState, useEffect } from 'react';
import { GoMoon, GoSun } from "react-icons/go";


const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <button className={`bg-${darkMode ? 'black' : 'yellow-300'} text-${darkMode ? 'white' : 'black'}`} onClick={toggleDarkMode}>
        {darkMode ? (
          <span>
            <span role="img" aria-label="Moon"> <GoMoon /> </span>
          </span>
        ) : (
          <span>
            <span role="img" aria-label="Sun"> <GoSun /></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Settings;
