import React, { useState } from "react";


function Register(){


 
  let [firstName, setFirstName] = useState("")

  let [lastName, setLastname] = useState("")
  let [Address, setAddress] = useState("")
  let [NatinalID, setNatinalID] = useState("")
  let [Age, setAge] = useState("")



  function handleFirstName(event) {
    setFirstName((firstName = event.target.value));
  }

  function handleLastname(event) {
    setLastname((lastName = event.target.value));

  } 
  function handleAddress(event) {
    setAddress((Address = event.target.value));
  }
  function handleNatinalID(event) {
    setNatinalID((NatinalID = event.target.value));

  } 
  function handleAge(event) {
    setAge((Age = event.target.value));
  }

  let info = {
    firstName: firstName,
    lastName: lastName,
    Address: Address,
    nationalID: Number( NatinalID),
    Age: Age,
  };

  function handleSubmit(event) {
    event.preventDefault();
    let patient = JSON.parse(localStorage.getItem("MD"))
    patient.push(info)
    localStorage.setItem("MD", JSON.stringify(patient))
  }


  return (




    <main style={{ padding: "1rem 0", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleFirstName}
        />
        <br />
        <input
          type="text"
          value={lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleLastname}
        />
        <br />
        <input
          placeholder="Address"
          type="text"
          value={Address}
          name="Address"
          onChange={handleAddress} />

        <br />


        <input
          placeholder="Natonal ID"
          type="text"
          value={NatinalID}
          name="NatinalID"
          onChange={handleNatinalID} />

        <br />


        <input
          placeholder="Age"
          type="text"
          value={Age}
          name="Age"
          onChange={handleAge} />
        <br />


        <input type="submit" value="submit" />
      </form>
    </main>
  );
}

export default Register;