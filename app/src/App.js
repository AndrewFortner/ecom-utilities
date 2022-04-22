// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} /> //create a route for each component
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
