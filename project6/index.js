import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Triage from "./routes/Triage";
import TriagePatient from "./routes/TriagePatient";
import Doctors from "./routes/Doctors";
import History from "./routes/History";
import DoctorPatient from "./routes/DoctorPatient";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="login" element={<Login />} />

        <Route path=":register" element={<Register />} />



        <Route path="doctors" element={<Doctors />} >
          <Route path=":nationalID" element={<DoctorPatient />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Plsase select a patient</p>
              </main>
            }
          />
        </Route>
        <Route path="history" element={<History />} />
        <Route path="triage" element={<Triage />}>
          <Route path=":nationalID" element={<TriagePatient />} />
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