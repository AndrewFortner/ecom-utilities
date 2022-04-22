// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
