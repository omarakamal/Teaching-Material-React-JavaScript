
import { useParams } from "react-router-dom";
// import { getPatient } from "./Data";
import React from "react";



export default function DoctorPatient() {
    console.log("In doctorPatient")

    
  

  let params = useParams();
  let Doctors = JSON.parse(localStorage.getItem("DoctorPatient"));

  let patients = getPatient(Number(params.nationalID));
  
   function deletePatient(nationalID) {
    Doctors = Doctors.filter(
      patients => patients.nationalID !== nationalID
    );
  }

  function getPatient(nationalID) {  
    return Doctors.find(
      patient => patient.nationalID === nationalID
    );
  }

//   function handleSubmit(event) {
// //     event.preventDefault();
//     let patient = JSON.parse(localStorage.getItem("DoctorPatient"))
//     patient.push(info)
//     localStorage.setItem("DoctorPatient", JSON.stringify(patient))
  
  return (
    <main style={{ padding: "1rem", columnGap:"" }}>
       
      <h2>Patient: {patients.firstName}</h2>
      <p>Last name: {patients.lastName}</p>
      <p>Address: {patients.Address}</p>
      <p>nationalID: {patients.nationalID}</p>
      <p>bloodpressure: {patients.bloodpressure}</p>
      <p>heartrate: {patients.heartrate}</p>
      <p>weight: {patients.weight}</p>
      <p>Allergies: {patients.allergies}</p>

      <button
          onClick={() => {
            deletePatient(patients.nationalID);
            localStorage.setItem("DoctorPatient",JSON.stringify(Doctors))
          }}
        >
          Delete
        </button>

      

     
    </main>
  );
}