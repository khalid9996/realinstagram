import React from "react";
import './register.css'
import {GrInstagram} from "react-icons/gr"
import { useState } from "react";


const handleSubmit = async (event) => {
  event.preventDefault()
  console.log("Submit Clicked")
}





const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true)
  const handleChange = () => {
    setDisabled(disabled? (false):(true))
  }

return <div className="register__page">
    <div className="register__window">
      <form onSubmit={handleSubmit}>
        <div className="logo__div"><GrInstagram className="ig__logo"/><span>Instagram</span></div>
        <div className="input__div">
          <span>Email</span>
        <input type="email" onKeyDown={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        </div>
        <div className="input__div">
        <span>Password</span>
        <input type="password" onKeyDown={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        </div>
        <div className="terms__div">
          <input onChange={handleChange} type="checkbox" /><span>Accept terms and conditions</span></div>
        <button className={disabled? (''):("notdisabled")} disabled={disabled} type="submit">Register</button>
      </form>
      </div></div>;
};

export default Register;
