import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
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
    <button className='bg-[black] text-white' onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  </div>
  )
}

export default Settings