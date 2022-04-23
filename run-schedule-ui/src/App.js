import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
