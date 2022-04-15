import React from 'react';
import default_profile from '../default-profile-pic.png';
import { useNavigate } from 'react-router-dom';
import Register from './Register';

function ProfilePic () {
    //let navigate = useNavigate();
    return (
        <div className="flex flex-row items-center justify-right mb-12">
            <div className="flex flex-col items-center justify-between h-24 w-64">
                <button type="button" onClick={(e)=> {
                    //navigate('/Register');
                }} className="w-full rounded text-4xl font-serif bg-salmon text-white">sign up</button>
                <button className="rounded w-full text-4xl font-serif bg-salmon text-white">log in</button>
            </div>
            <img src={default_profile} className="scale-[.5] sm:scale-100" alt="default-profile" />
        </div>
    );
}

export default ProfilePic;
