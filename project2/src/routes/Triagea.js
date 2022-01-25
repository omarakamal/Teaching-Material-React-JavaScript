import { useParams } from "react-router-dom";
// import { getPatient } from "./Data";
import React, { useState } from "react";


export default function Triagea() {

  let [bloodpressure, setBloodPressure] = useState("")

  let [heartrate, setHeartRate] = useState("")

  let [weight, setWeight] = useState("")


  let [allergies, setAllergies] = useState("")

  let patient = JSON.parse(localStorage.getItem("M"));
  
  // console.log("In single file ", patient)

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
  
  let patients = getPatient(Number(params.nationalID));
  console.log("Single patient ",patients)
  function getPatient(nationalID) {  
    return patient.find(
      patient => patient.NationalID === nationalID
    );
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let patient = JSON.parse(localStorage.getItem("M"))
  //   patient.push(info)
  //   localStorage.setItem("M", JSON.stringify(patient))
  //   console.log("333d")
  // }
  function handleSubmit(event) {
    event.preventDefault();
    // let Patient = getPatients(NationalId);
    let Doctors = JSON.parse(localStorage.getItem("DoctorPatient"))
    patients.bloodpressure = bloodpressure;
    patients.heartrate = heartrate;
    patients.weight = weight;
    console.log("updated in triage ", patients)
    Doctors.push(patients)
    localStorage.setItem("DoctorPatient", JSON.stringify(Doctors))
  
  }
  return (
    <main style={{ padding: "1rem" }}>
      <h3>name: {patients.firstName}{patients.lastName}</h3> 
      <p>nationalID{patients.nationalID}</p>
      <p>Age:{patients.Age}</p>
       <p>Email : {patients.email}</p>
       <p>Address: {patients.Address}</p>
      <form onSubmit={handleSubmit}>

        <label>BloodPressure:</label>
        <input
          type="text"
          value={bloodpressure}
          name="BloodPressure"
          placeholder="Blood Pressure"
          onChange={handleBloodPressure}
        />
        <br />
        <label>heart rate:</label>
        <input
          type="text"
          value={heartrate}
          name="lastName"
          placeholder="Last Name"
          onChange={handleHeartRate}
        />
        <br />
        <label>weight:</label>
        <input
          placeholder="Address"
          type="text"
          value={weight}
          name="Address"
          onChange={handleWeight} />

       

        <br />


        


        <input type="submit" value="submit" />
      </form>
    </main>
  );
}