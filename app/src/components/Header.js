import React from 'react';
import default_profile from '../default-profile-pic.png';
import logo from '../favcon.ico';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AndrewProfile from '../AndrewProfile.jpg';

function Header ({loggedIn, change}) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-between">
            <button className = "" onClick={(e)=> {
                      navigate('/')
                    }}>
            <div className="flex flex-row items-center justify-start">
                <img src={logo} className="w-24 h-16" alt="logo" />
                <p className="text-3xl text-salmon font-poppins">MealMate</p>
            </div>
            </button>
            
            <div className="flex flex-row items-center">
                <div className={`flex flex-col items-center justify-between h-16 w-20 ${loggedIn ? 'hidden' : ''}`}>
                    <button type="button" onClick={(e)=> {
                        navigate('/Register');
                        change(!loggedIn);
                    }} className="w-full hover:scale-105 transition-all duration-300 rounded text-lg font-poppins bg-salmon text-white">sign up</button>
                    <button type="button" onClick={(e)=> {
                        navigate('/Login');
                        change(!loggedIn);
                    }}
                        className="rounded hover:scale-105 transition-all duration-300  w-full text-lg font-poppins bg-salmon text-white">log in</button>
                </div>
                    <img src={loggedIn ? AndrewProfile : default_profile} className="rounded-full w-20 h-20" alt="default-profile" />
            </div>
         </div> 
    );
}

export default Header;
