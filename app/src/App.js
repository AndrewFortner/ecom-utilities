import './App.css';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import { useState } from 'react';

function App() {
  const [loggedIn, change] = useState(false);
  return (
    <div className = "">
      <Routes>
        <Route path="/" element={<Header loggedIn = {loggedIn} change={change}/>} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
    
  );
}

export default App;
