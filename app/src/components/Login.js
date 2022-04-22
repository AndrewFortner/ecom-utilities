import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { useNavigate } from 'react-router-dom';
import Form from './Form.css';

const Login = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm, 
        validate
        );
    const navigate = useNavigate();
    
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Welcom Back!</h1>
                <div className='form-inputs'>
                    <label htmlFor='email'
                    className='form-label'>
                    Email Address
                    </label>
                        <input 
                        id='email'
                        type="email" 
                        name='email' 
                        className="form-input"
                        placeholder='Enter email'
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password'
                    className='form-label'>
                    Password
                    </label>
                        <input 
                        id='password'
                        type="password" 
                        name='password' 
                        className="form-input"
                        placeholder='Enter password'
                        value={values.password}
                        onChange={handleChange} />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn" 
                type='submit'>
                Sign In
                </button>
                <p>Don't have an account?</p>
                <button className="form-input-btn" type='button' onClick={(e) => {
                    navigate('./Register');
                }}>
                Sign Up
                </button>
                <a href='/'>Forgot Password?</a>
            </form>
        </div>
    );
};


export default Login;