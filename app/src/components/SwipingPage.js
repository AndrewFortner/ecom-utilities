import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import json_data from '../recipes.json';
import { useState } from 'react';
import './bruh.css'
function SwipingPage() {
  const [loggedIn, change] = useState(false);
  const data = json_data["recipes"];
  const dataItems = data.map((item,index) => {
    console.log(item)
    const ingredients = item.extendedIngredients.map((ingredient,index) => {
      return (
        <li key={index}>{ingredient.name} {ingredient.amount} {ingredient.unit}</li>
      );
    })
    const instructions = item.analyzedInstructions[0]?.steps.map((instruction,index) => {
      console.log(instruction.step)
      return (
        <li key={index}>{instruction.step}</li>
      );
    })
    return (
      <div className="recipe-card" key={index}>
        <div className="recipe-card-image">
          <img src={item.image} alt="recipe" />
        </div>
        <div className="recipe-card-info">
          <h3><b>{item.title} - ${(item.pricePerServing/10).toFixed(2)}</b></h3>
          <h3><u>Ingredients</u></h3>

          <ol>
            {ingredients}
          </ol>
          <h3><u>Instructions</u  ></h3>

          <ol>
            {instructions}
          </ol>
        </div>
      </div>
    )
  })
  return (
    <div className = "content-center">
          {dataItems[0]}

      <Routes>
        <Route path="/" element={<Header loggedIn = {loggedIn} change={change}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
    
  );
}

export default SwipingPage;
