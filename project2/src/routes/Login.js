import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';
import { getLogin, getUser} from "./user";

export default function Login(props) {
    // props.handleLogin()

    // let user = getLogin();
    const [userInfo, setUserInfo] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        let user = getUser(userInfo.firstname, userInfo.password);
        console.log(user)
        console.log(userInfo)
        if (user) {
            console.log("inside if")
            props.handleLogin()
        }
   else{ 
document.getElementById("warning").innerHTML="Wrong password or userPlease enter a valid username or password"}
    }
    
    const handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const updatedUser = { ...userInfo };
        updatedUser[attributeToChange] = newValue;
        console.log("updated", updatedUser);
        setUserInfo(updatedUser)

    }

    return (
        <main style={{ padding: "1rem 0" }}>

            <div style={{ display: "flex" }}>

                {/* --login form-- */}
                
                <form onSubmit={handleSubmit}>

                    <label for="fname">UserName</label><br />
                    <input type="text" onChange={handleChange} id="fname" name="firstname" placeholder="userName.."></input><br />
                    <label for="lname">password
    </label><br />
                    <input type="password" onChange={handleChange} id="lname" name="password" placeholder="password.."></input><br />

                    <button type="submit" class="button" style={{ verticalAlign: 'middle', }}><span>Submit </span></button>
                    <h3 id="warning"></h3>
                </form>
            </div>
            <Outlet />
        </main>
    );
}