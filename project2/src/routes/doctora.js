import { useParams } from "react-router-dom";
// import { getPatient } from "./Data";
import React, { useState } from "react";


export default function Doctora() {
    console.log("In doctorPatient")
  let [bloodpressure, setBloodPressure] = useState("")

  let [heartrate, setHeartRate] = useState("")

  let [weight, setWeight] = useState("")


  let [allergies, setAllergies] = useState("")

  


  function handleBloodPressure(event) {
    setBloodPressure((bloodpressure = event.target.value));
  }

  function handleHeartRate(event) {
    setHeartRate((heartrate = event.target.value));

  } 
  function handleWeight(event) {
    setWeight((weight = event.target.value));
  }
  function handleAllergies(event) {
    setAllergies((allergies = event.target.value));

  } 
  

  let info = {
    bloodpressure: bloodpressure,
    heartrate: heartrate,
    weight: weight,
    allergies: allergies ,
    
  };
  let params = useParams();
  let patient = JSON.parse(localStorage.getItem("M"));
  console.log("in doctorpatient ", patient)
  let patients = getPatient(Number(params.nationalID));

  function getPatient(nationalID) {  
    return patient.find(
      patient => patient.nationalID === nationalID
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let patient = JSON.parse(localStorage.getItem("M"))
    patient.push(info)
    localStorage.setItem("MD", JSON.stringify(patient))
  }
  return (
    <main style={{ padding: "1rem" }}>
       
      <h2>Patient: {patients.firstName}</h2>
      <p>Last name: {patients.lastName}</p>
      <p>Address: {patients.Address}</p>
      
      <p>nationalID: {patients.nationalID}</p>

      <form onSubmit={handleSubmit}>

      
        <input
          type="text"
          value={bloodpressure}
          name="BloodPressure"
          placeholder="Blood Pressure"
          onChange={handleBloodPressure}
        />
        <br />
        <input
          type="text"
          value={heartrate}
          name="heartrate"
          placeholder="heart rate"
          onChange={handleHeartRate}
        />
        <br />
        <input
          placeholder="weight"
          type="text"
          value={weight}
          name="weight"
          onChange={handleWeight} />

        <br />


        <input
          placeholder="Allergies "
          type="text"
          value={allergies}
          name="allergies"
          onChange={handleAllergies} />

        <br />


        


        <input type="submit" value="submit" />
      </form>

     
    </main>
  );
}