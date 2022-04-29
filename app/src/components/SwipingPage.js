import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import json_data from '../recipes.json';
import { useState } from 'react';
import './bruh.css'
import { useNavigate } from "react-router-dom";

function SwipingPage() {
  const [loggedIn, change] = useState(false);
  const data = json_data["recipes"];
  const navigate = useNavigate();
  let numRecipes = 99;
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
        <div className="flex flex-row justify-center items-center">
          <div className="recipe-card-info">
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
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-between content-center w-6/12">
            <button className="flex flex-col justify-center items-center" id="form-input-btn"
                    onClick={(e)=> {
                      navigate('/')
                    }}>
              no
            </button>
            <button className="flex flex-col justify-center items-center" id="form-input-btn"
                    onClick={(e)=> {
                      navigate('/')
                    }}>
              yes
            </button>
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
        <Route path="/Login" element={<Login />} />
      </Routes>
      {dataItems[Math.floor(Math.random() * 99)]}
    </div>
    
  );
}

export default SwipingPage;
