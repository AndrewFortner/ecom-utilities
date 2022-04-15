import React from 'react';
import default_profile from '../default-profile-pic.png';
import logo from '../favcon.ico';

function Header () {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center justify-start">
                <img src={logo} className="w-24 h-16" alt="logo" />
                <p className="text-3xl text-salmon font-serif">MealMate</p>
            </div>
            <div className="flex flex-row items-center ">
                <div className="flex flex-col items-center justify-between h-16 w-20">
                    <button type="button" onClick={(e)=> {
                        e.preventDefault();
                        alert('Sign in to see your profile picture.');
                    }} className="w-full hover:scale-105 transition-all duration-300 rounded text-lg font-serif bg-salmon text-white">sign up</button>
                    <button className="rounded hover:scale-105 transition-all duration-300  w-full text-lg font-serif bg-salmon text-white">log in</button>
                </div>
                    <img src={default_profile} className="w-20 h-20" alt="default-profile" />
            </div>
         </div>
        
    );
}

export default Header;
