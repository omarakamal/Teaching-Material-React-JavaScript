
import { useParams } from "react-router-dom";
// import { getPatient } from "./Data";
import React, { useState } from "react";


export default function TriagePatient() {
  console.log("In triagePatient")

  let params = useParams();
  let patient = JSON.parse(localStorage.getItem("MD"));


  let patients = getPatient(Number(params.nationalID));

  function getPatient(nationalID) {  
    return patient.find(
      patient => patient.nationalID === nationalID
    );
  }

  let [bloodpressure, setBloodPressure] = useState("")

  let [heartrate, setHeartRate] = useState("")

  let [weight, setWeight] = useState("")


  let [allergies, setAllergies] = useState("")
  const [visible, setVisible] = React.useState(false);

  


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
    console.log("updated in triage ", Doctors)
  }



  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let patient = JSON.parse(localStorage.getItem("MD"))
  //   patient.push(info)
  //   localStorage.setItem("MD", JSON.stringify(patient))
  // }
  return (





    <main style={{ padding: "1rem" }}>
      <h2>Patient: {patients.firstName}</h2>
      <p>Last name: {patients.lastName}</p>
      <p>Address: {patients.Address}</p>
      <p> Age: {patients.Adge}</p>
      <p>nationalID: {patients.nationalID}</p>

  

      
  
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Confirm' : 'Confirm'}
      </button>
      {visible && 
    

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
      </form> }
      </div>

    
    </main>
  );
}