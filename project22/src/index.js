//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Triage from './routes/Triage';
import Triagea from './routes/triagea';
import Registerpatient from "./routes/Registerpatient";
import Doctor from "./routes/doctor"
import Login from "./routes/login"

ReactDOM.render
  (<BrowserRouter>
    <Routes>



        <Route path = "/" element={<Login />} />
        <Route path="home" element={<App />}>

        
        <Route path=":registerpatient" element={<Registerpatient />} />

        <Route path="doctor" element={<Doctor />} />

        <Route path="triage" element={<Triage />}>
          <Route path=":nationalID" element={<Triagea />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Link</p>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
    ,
    document.getElementById('root'));

{/* <Route path="/" element={<App />}>
    <Route path=":registerpatient" element={<Registerpatient />} /> 
    <Route path="doctor" element={<Doctor />} /> 
    <Route path="triage" element={<Triage />}>
          <Route path=":national" element={<Triagea />} />
    
    <Route


        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')); */}