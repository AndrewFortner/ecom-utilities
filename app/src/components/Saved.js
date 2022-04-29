import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import json_data from '../recipes.json';
import { useState } from 'react';
import './bruh.css'
import saved from './SwipingPage'
import { useNavigate } from "react-router-dom";

function Saved({saved, addSaved}) {
  const [loggedIn, change] = useState(false);
  const data = json_data["recipes"];
  const navigate = useNavigate();
  let numRecipes = 99;
  const dataItems = saved.map((item,index) => {
    console.log(item)
    const ingredients = item.extendedIngredients.map((ingredient,index) => {
      return (
        <li key={index}>{ingredient.name} {(ingredient.amount).toFixed(2).replace(/[.,]00$/, "")} {ingredient.unit}</li>
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
        <div className="flex flex-row justify-center items-center recipe-card-info">
          <div className="">
            <h3><u>Ingredients</u></h3>

            <ol>
              {ingredients}
            </ol>
            {/*<h3><u>Instructions</u  ></h3>*/}

            {/*<ol>*/}
            {/*  {instructions}*/}
            {/*</ol>*/}
          </div>
          <div className="flex flex-col justify-center items-center" id="recipe-card-id">
            <img src={item.image} alt="recipe" />
            <h3><b>{item.title} - ${(item.pricePerServing/10).toFixed(2)}</b></h3>
          </div>
        </div>
        

      </div>
    )
  })
  return (
    <div className = "content-center">
      <Routes>
        <Route path="/" element={<Header loggedIn = {loggedIn} change={change}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {dataItems}
    </div>
    
  );
}

export default Saved;
