
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/pages/Home';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [loggedIn, change] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path="/" element={<Header loggedIn = {loggedIn} change={change}/>} />
      </Routes>
    </Router>

  );
}

export default App;
