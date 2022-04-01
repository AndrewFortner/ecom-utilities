import React from 'react';

function Createacc() {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: ''
        }
    }

    changeHandler = e => {
        this.setState({Name:e.target.value}) //do i need this? and what is it really doing? should i make these functions for each input?
    }
    
    render() {
     return (
        <div>
         <h2>Create Your Account</h2>
         <form>
             <p>
              <label>Name<input type='text' name='Enter Name' value={this.state.Name} onChange={this.changeHandler}/></label>
             </p>
             <p>
              <label>Email Address<input type='text' name='Enter Email' value={this.state.Email} /></label>
             </p>
             <p>
              <label>Password<input type="text" name='Enter Password' value={this.state.Password} /></label>
             </p>
             <p>
              <label>Confirm Password<input type="text" name='Enter Password' /></label>
             </p>
         </form>
        </div>
      )
     }
    }


export default Createacc;