import React, { useState } from "react";
import { getUser } from "../Users"
import "../index.css";

function Login(props){
    let [userName , setUserName]= useState("")
    let [password , setPassword]=useState("")
    
    
  
    let handleSubmit = (event)=> {
        event.preventDefault();
        let userData = getUser(userName,password);

        if(userData){
            props.handleLogin()
        }
       else{document.getElementById("error").innerHTML("hgfjdksla;")
    }
    }
    function handleUserName (event){
        setUserName((userName = event.target.value));
    }
    function handlePassword (event){
        setPassword((password = event.target.value));

    }
   
    

    return (
       
            <form onSubmit={handleSubmit} >
                <label for="username">Username:</label>
                <br/>
                
               <input onChange={handleUserName} type="text" id="username" name="UserName"/>
                <br/>
                <label for="pwd">Password:</label>
                <br/>
                <input  onChange={handlePassword} type="password" id="pwd" name="password"/>
                <br/><br/>
                <input  type="submit" value="submit"/>
              

            </form>
        ); 
}              
 
   
   export default Login;
