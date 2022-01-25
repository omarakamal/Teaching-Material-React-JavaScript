import './App.css';
import { Outlet, Link } from "react-router-dom";
import Login from './routes/login';
import { getPatients } from './routes/data';

import React, { useState } from 'react';


export default function App() {
  let Patient = getPatients();
  localStorage.setItem("M", JSON.stringify(Patient))

  let Dectors = [];
  localStorage.setItem("A", JSON.stringify(Dectors))

  // let [authenticate, setAuthenticate] = useState(false);

  // function handleLogin() {
  //   setAuthenticate(true);
  // }
  // if (!authenticate) {
  //   return <Login handleLogin={handleLogin} />;
  // }


  return (
    <div>
      <h1>Emergency Department!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/registerpatient">registerpatient</Link> |{" "}
        <Link to="/triage">triage</Link> |{" "}
        <Link to="/doctor">doctor</Link> |{" "}
        <Link to="/history ">History of all patient's </Link>

      </nav>
      <Outlet />
    </div>
  );

}