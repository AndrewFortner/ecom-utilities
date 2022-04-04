// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/> //for the home page, create one
        <Route path='/Register' element={Register} /> //create a route for each component
        <Route path='*' element={<ErrorPage />} /> //create error page 
      </Routes>
    </Router>
  );
}

export default App;
