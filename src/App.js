// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import CreateConsole from './pages/CreateConsole';
import EditConsole from './pages/EditConsole';
import ViewConsole from './pages/ViewConsole';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateConsole />} />
        <Route path="/edit/:id" element={<EditConsole />} />
        <Route path="/view/:id" element={<ViewConsole />} />
        <Route path="*" element={<p style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
