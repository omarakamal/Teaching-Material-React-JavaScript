
import React, { useState } from "react";


function Registerpatient(){


 
  let [firstName, setFirstName] = useState("")

  let [lastName, setLastname] = useState("")

  let [Address, setAddress] = useState("")


  let [National, setNational] = useState("")

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
  function handleNational(event) {
    setNational((National = event.target.value));

  } 
  function handleAge(event) {
    setAge((Age = event.target.value));
  }

  let info = {
    firstName: firstName,
    lastName: lastName,
    
    NationalID: Number(National),
    Age: Age,
    Address: Address,
  };

  function handleSubmit(event) {
    event.preventDefault();
    let patient = JSON.parse(localStorage.getItem("M"))
    patient.push(info)
    localStorage.setItem("M", JSON.stringify(patient))
    console.log(localStorage)
  }


  return (




    <main >
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
          placeholder="National"
          type="text"
          value={National}
          name="National"
          onChange={handleNational} />

        <br />


        <input
          placeholder="Age"
          type="text"
          value={Age}
          name="Age"
          onChange={handleAge} />
        <br />


        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </main>
  );
}

export default Registerpatient;