import React, { useState } from 'react';
import useForm from './UseForm';
import validate from './validateInfo';
import Form from './Form.css';
import Header from './Header';

const Register = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm, 
        validate
        );
    
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Create Your Account</h1>
                <div className='form-inputs'>
                    <label htmlFor='name'
                    className='form-label'>
                    Name
                    </label>
                        <input 
                        id='name'
                        type="text" 
                        name='name' 
                        className="form-input"
                        placeholder='Enter name'
                        value={values.name}
                        onChange={handleChange} />
                        {errors.name && <p>{errors.name}</p>}
                </div>
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
                <div className='form-inputs'>
                    <label htmlFor='password2'
                    className='form-label'>
                    Confirm Password
                    </label>
                        <input 
                        id='password2'
                        type="password" 
                        name='password2' 
                        className="form-input"
                        placeholder='Enter password'
                        value={values.password2}
                        onChange={handleChange} />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" 
                type='submit'>
                Create Account
                </button>
            </form>
        </div>
    );
};


export default Register;