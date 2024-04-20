import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Dashboard from './Dashboard'; // Import other components



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ErrorBoundary><Dashboard /></ErrorBoundary>} />
        {/* Define other routes */}
      </Routes>
    </Router>
   
  );
};

export default App;
