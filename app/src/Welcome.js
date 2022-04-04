import React from 'react'

export default function Welcome() {
  return (
      // Mealmate Logo: 572x133    Profile Icon: 134x129
      <>
            <img id='logo' src={require('./assets/logo.png')} width='286' height='66.5' alt='MealMate Logo' />
            <img id='profile' src={require('./assets/profile.png')} width='67' height='64.5' alt='User Profile' />

            <div id='welcomemessage'>
                <img src={require('./assets/welcome/food1.png')} width='1440' height='935' alt='food1.png' />
                Personalized Recipes Built for You
            </div>

            <div id='infocard'>
                <img src={require('./assets/welcome/food2.png')} width='601' height='473' alt='food2.png' />
                Explore new recipes based on your budget and cuisine preferences. Create an account and see
                what other people are enjoying. Reach out to people who like a common dish to cook it!
            </div>

            <div class='threecards' id='card1'>
                <img src={require('./assets/welcome/dish.png')} width='183' height='111' alt='dish.png' />
                Personalized recipes built for you
            </div>
            <div class='threecards' id='card2'>
                <img src={require('./assets/welcome/cash.png')} width='243' height='192' alt='cash.png' />
                Meals to fit your budget
            </div>
            <div class='threecards' id='card3'>
                <img src={require('./assets/welcome/heart.png')} width='179' height='190' alt='heart.png' />
                Connect based on your food interests
            </div>

            <div id='teonte'>
                <img src={require('./assets/welcome/redx.png')} width='180' height='180' alt='redx.png' />
                To Eat or Not to Eat
                <img src={require('./assets/welcome/greencheck.png')} width='180' height='180' alt='greencheck.png' />
            </div>

            <div id='bottombar'>
                <img src={require('./assets/welcome/food3.png')} width='1440' height='343' alt='food3.png' />
                Find meals that work for your budget
                <button id='signup'> Sign Up!</button>
            </div>


      </>
  )
}