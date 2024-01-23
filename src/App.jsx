// App.jsx
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Userhome from './Components/Userhome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userhome" element={<Userhome />} />
      </Routes>
    </Router>
  );
};

export default App;
