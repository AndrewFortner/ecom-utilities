import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';
import SwipingPage from './components/SwipingPage';

function App() {
  const [loggedIn, change] = useState(false);
  return (
    <SwipingPage/>
  );
}

export default App;
