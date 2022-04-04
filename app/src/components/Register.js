import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

function Register() {
    const [values, setValues] = useState({
        name: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({...values, name: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, emailAddress: event.target.value})
    }

    const handlePasswordInputChange = (event) => {
        if (values.password === values.confirmPassword) {
            setValues({...values, password: event.target.value})
        }
    } // is this the correct way of checking if pass and confirmPass match?

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.email && values.password && values.confirmPassword) {
            setValid(true);
        }
        setSubmitted(true);
    }

    // not sure what to do with the confirm password box

     return (
        <div className='form-container'>
         <h2 className='form-header'>Create Your Account</h2>
         {submitted && valid ? <div className='sucess-message'>Success! Thank you for registering!</div> : null}
         <form className='register-form' onSubmit={handleSubmit}>
            <label for="name">Name</label>
             <input
                disabled={submitted}
                onChange={handleNameInputChange}
                value={values.name}
                className='form-field' 
                placeholder='Enter Name'
                name='name' />
             {submitted && !values.name ? <span>Please enter a name</span> : null} 
            <label for="email">Email</label>
             <input 
                disabled={submitted}
                onChange={handleEmailInputChange}
                value={values.emailAddress}
                className='form-field' 
                placeholder='Enter Email'
                name='email address' />
             {submitted && !values.emailAddress ? <span>Please enter an email address</span> : null}
            <label for="password">Password</label>
             <input 
                disabled={submitted}
                onChange={handlePasswordInputChange}
                value={values.password}
                className='form-field' 
                placeholder='Enter Password' 
                name='password' />
             {submitted && !values.password ? <span>Please enter a password</span> : null}
            <label for="confirm password">Confirm Password</label>
             <input 
                disabled={submitted}
                value={values.confirmPassword}
                className='form-field' 
                placeholder='Enter Password' 
                name='confirm password' />
             {submitted && !values.confirmPassword && values.password !== values.confirmPassword ? <span>Please confirm password</span> : null}
            <button 
            className='form-field'
            type='create account'> Create Account</button>
         </form>
        </div>
      )
     }


export default Register;