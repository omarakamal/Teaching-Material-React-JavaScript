import React  from "react";

  function FormComponent (props){
   return (<div>
   <form>
     <input
       type="text"
       value={props.data.firstName}
       name="firstName"
       placeholder="First Name"
       onChange={props.handleChange}
       />
     <br />
     <input
      type="text"
      value={props.data.lastName}
      name="lastName"
      placeholder="Last Name"
      onChange={props.handleChange}
      />
     <br />
     <input
     placeholder="Age"
     type="text"
     value={props.data.age}
     name="age"
     onChange={props.handleChange}/>
     <br />
     <label>
     <input
       type="radio"
       name="gender"
       value="male"
       checked={props.data.gender === "male"}
       onChange={props.handleChange}
     />{" "}
     Male
   </label>
   <br />
   <label>
     <input
       type="radio"
       name="gender"
       value="female"
       checked={props.data.gender === "female"}
       onChange={props.handleChange}
     />{" "}
     Female
   </label>

     <br />
     <label>Your Location:</label>
   <select
     value={props.data.gLocation}
     onChange={props.handleChange}
     name="gLocation"
   >
     <option value="select location">Please select your location</option>
     <option value="Dummah Al Jandal">Dummah Al Jandal</option>
     <option value="Riyadh">Riyadh</option>
     <option value="Jeddah">Jeddah</option>
     <option value="Sakkakah">Sakkakah</option>
   </select>

     <br />
     <label>
     <input
       type="checkbox"
       name="kosher"
       checked={props.data.kosher}
       onChange={props.handleChange}
     />{" "}
       Kosher
   </label>
   <label>
     <input
       type="checkbox"
       name="Halal"
       checked={props.data.Halal}
       onChange={props.handleChange}
     />{" "}
       Halal
   </label>
   <label>
     <input
       type="checkbox"
       name="vegan"
       checked={props.data.vegan}
       onChange={props.handleChange}
     />{" "}
       Vegan
   </label>

     <br />
     <button >Submit</button>
   </form>
   <hr />
   <h2>Entered information:</h2>
   <p>Your name: {props.data.firstName} {props.data.lastName}</p>
   <p>Your age: {props.data.age}</p>
   <p>Your gender: {props.data.gender}</p>
   <p>Your destination: {props.data.gLocation}</p>
   <p>
     Your dietary restrictions:
   </p>
   <p id="Kosher" > is Kosher {props.data.kosher ? "yes": "no"}</p>
   <p id="Halal">  is Halal {props.data.Halal ? "yes": "no"}</p>
   <p id="Vegan">  is Vegan {props.data.vegan ? "yes": "no"}</p>
   </div>
   )
  }
  export default FormComponent 