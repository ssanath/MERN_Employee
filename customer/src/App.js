import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Update from './components/Update.js';
import Details from './components/Details.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/view/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
