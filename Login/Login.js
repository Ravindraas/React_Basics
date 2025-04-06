//import React from 'react'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [username, updateUsername] = useState("ravindra");
  const [password, updatePassword] = useState("12345");

  const navigate = useNavigate();

  function handleUsername(event){
    console.log(event.target.value);
    updateUsername(event.target.value);
    console.log("username",username);
  }
  function handlePassword(event){
    console.log(event.target.value);
    updatePassword(event.target.value);
    console.log("password",password);
  }
  function handlelogin(){
    if(username === "ravindra" && password === "12345" ){
      //now we have to declare the navigate
      navigate("/Home");
    }
  }
  return (
    <>
    {username}
    {password}
    <div className="container mt-5">
    <label>Username</label><br/>
    <input type = "text" onChange={handleUsername}></input><br/><br/>
    <label>Password</label><br/>
    <input type = "password" onChange={handlePassword}></input><br/><br/>
    <button onClick={handlelogin}>login</button>
    
    </div>
    </>
  )
}
