import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import json_data from '../recipes.json';
import { useState } from 'react';
import './bruh.css'
import Saved from './Saved'
import { useNavigate } from "react-router-dom";

function SwipingPage() {
  const [loggedIn, change] = useState(false);
  const [bro, broo] = useState(true);
  const [saved, addSaved] =  useState([])
  const [price, setPrice] = useState(0);
  const data = json_data["recipes"];
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setPrice(300)
  };
  let numRecipes = 99;
  const dataItems = data.map((item,index) => {
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
    
      
      const hi=<div className=" recipe-card font-poppins" key={index}>
        <div className="flex flex-row justify-center items-center recipecardinfo">
          <div className="font-poppins">
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
            <img class = "img" src={item.image} alt="recipe" />
            <h3><b>{item.title} - ${(item.pricePerServing/25).toFixed(2)}</b></h3>
          </div>
          <form onSubmit={onSubmit}>
            price
            <input type="text" name="price"/>
            <input type="submit" name="Submit" />

          </form>
        </div>
        <div className="swipe-feature flex flex-row justify-center">
          <div className="flex flex-row justify-between content-center w-6/12">
            <button className="flex flex-col justify-center items-center" id="form-input-btn"
                    onClick={(e)=> {
                      navigate('/')
                    }}>
              <img src={require('../RedX.png')} height='75' width='75'/>
            </button>
            <button className="flex flex-col justify-center items-center" id="form-input-btn"
                    onClick={(e)=> {
                      navigate('Saved')
                      broo(!bro)
                    }}>
              <img src={require('../YummyLibrary.png')} height='200' width='200'/>
            </button>
            <button className="flex flex-col justify-center items-center" id="form-input-btn"
                    onClick={(e)=> {
                      navigate('/')
                      addSaved(oldArray => [...oldArray,item])
                    }}>
              <img src={require('../GreenCheck.png')} height='75' width='75'/>
            </button>
          </div>
        </div>

      </div>
      if(bro){
        return hi
      }
      else{
        return
      }
    
  })
  return (
    <div className = "content-center">
      <Routes>
        <Route path="/" element={<Header loggedIn = {loggedIn} change={change}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Saved" element={<Saved saved = {saved} change={addSaved}/> } />
        <Route path="/Login" element={<Login />} />
      </Routes>
        {dataItems[Math.floor(Math.random() * 99)]}
    </div>
    
  );
}

export default SwipingPage;
