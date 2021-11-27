import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signin.css';
import useAuth from '../../../hooks/useAuth'







const Signin = () => {
    const [loginData,setLoginData] =useState({})
    const {user, loginUser,signInWithGoogle, isLoading, authError} = useAuth()
    const location = useLocation()

    const history = useHistory()
  
    

    const handleOnChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);


    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location,history)
        e.preventDefault()
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    

    return (
       <>




    <div className="container " >
    <div className="form w-50">
    <div className="row d-flex justify-content-center"> 
    <div className="col-sm-12 col-lg-9 ">
                                
        <form onSubmit={handleLoginSubmit}>
            <h1>Log in</h1>
        <input onBlur={handleOnChange} required type="email" name="email" className="mt-5 mb-3 mx-auto inputs w-100" placeholder="Email" />
        
        <input required onBlur={handleOnChange} type="password" className=" mx-auto inputs w-100" name="password" placeholder="Password" />
            <p className="mt-2 text-danger"></p>
        <button type="submit"  className="buttons">Sign in</button>
        </form>
        <button onClick={handleGoogleSignIn} className="buttons-2">Google Sign in</button>


<br />
   <Link to="/register">Create account</Link>

   </div> 
   </div>
 </div>  
</div>
</>
    );
};

export default Signin;