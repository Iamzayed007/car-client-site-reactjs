import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {user, registerUser, isLoading, authError} = useAuth()
    const history = useHistory()
    const [loginData,setLoginData] =useState({})

    const handleOnBlur = (e)=>{

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);
        console.log(newLoginData)

    }
  
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password doesnt match')
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()
    }
    return (
        <div>
              <>




<div className="container " >
<div className="form w-50">
<div className="row d-flex justify-content-center"> 
<div className="col-sm-12 col-lg-9 ">
                            
    <form onSubmit={handleLoginSubmit}>
        <h1>Register</h1>
    <input required   onBlur={handleOnBlur}  type="text" name="name" className="mt-5 mx-auto inputs w-100" placeholder="Your Name" />
    <input required   onBlur={handleOnBlur}  type="email" name="email" className="mt-3 mb-3 mx-auto inputs w-100" placeholder="Your Email" />
    <input required   onBlur={handleOnBlur} type="password" className=" mx-auto mb-3 inputs w-100" name="password" placeholder="Password" />
    <input required   onBlur={handleOnBlur} type="password" className=" mx-auto inputs w-100" name="password2" placeholder="Re-Password" />
        <p className="mt-2 text-danger"></p>
    <button type="submit" className="buttons">Register</button>
    </form>


<br />
<Link to="/register">Already Registered?</Link>

</div> 
</div>
</div>  
</div>
</>
        </div>
    );
};

export default Register;