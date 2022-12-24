import React from "react";
import './login.css'
import {GrInstagram} from "react-icons/gr"
import { useState } from "react";
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Code : ${errorCode} and Message : ${errorMessage}`)
    });
  }
 
return <div className="login__page">
    <div className="login__window">
      <form onSubmit={handleSubmit}>
        <div className="logo__div"><GrInstagram className="ig__logo"/><span>Instagram</span></div>
        <div className="input__login__div">
          <span>Email</span>
        <input type="email" onKeyDown={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        </div>
        <div className="input__login__div">
        <span>Password</span>
        <input type="password" onKeyDown={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      </div></div>;
};

export default Login;
