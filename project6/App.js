//app صفحه 
import React from "react";
import { Outlet,Link } from "react-router-dom";
import {getPatients} from "./routes/Data"
// import Login from "./routes/Login";

 function App() {
  let Patient = getPatients();
  localStorage.setItem("MD", JSON.stringify(Patient))


//local storeg from triage to doctor
  let Doctors = [];
  localStorage.setItem("DoctorPatient",JSON.stringify(Doctors))
 
   
  
  // function handleLogin(){

    // let [authenticate, setAuthenticate] = useState(false);
  //   setAuthenticate((authenticate = true));
  // }
  // if(!authenticate){
  //   return <Login handleLogin ={handleLogin}/>;
  // } 
  
  return (
    <div style={{backgroundColor:"skyblue"}}>
      
    
      <h1 style={{textAlign:"center", fontFamily:"fantasy" }}  >if you want to get fixed</h1>
      
    
      <nav
        style={{
          borderBottom: "solid 2px",
          paddingBottom: "1rem",
          textAlign:"center",
          
        }}
        >
        <Link style={{fontFamily:"fantasy"}} to="/register">Register</Link> |{" "}
        <Link style={{fontFamily:"fantasy"}} to="/triage">Triage</Link>  |{" "}
         <Link style={{fontFamily:"fantasy"}} to="/doctors">Doctors</Link>  |{" "}
         <Link style={{fontFamily:"fantasy"}} to="/history">History</Link>  
  
         </nav>

        <Outlet/>

    </div>
  );
}
 
export default App;