
import React from "react";
// import {getPatients} from "./Data"

import { Outlet,NavLink ,  useSearchParams} from "react-router-dom";
// import { getPatients } from "./Data";

export default function Doctors() {
  

    // let patients = JSON.parse(localStorage.getItem("MD"))
    let DocPatient = JSON.parse(localStorage.getItem("DoctorPatient"))
    let [searchParams, setSearchParams] = useSearchParams();
  
    return (
      <div style={{ display: "flex" }}>

        
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {DocPatient
            .filter(patient => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = patient.firstName.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(patient => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                })}
                to={`/doctors/${patient.nationalID}`}
                key={patient.nationalID}
              >
                {patient.firstName}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }
  
  
  // class Doctors extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
 
  //         First:false,
  //         Second:false,
  //         Third:false,
  //     };
  //   }  handleChange=(event)=>{
  //     const { name, value, type, checked } = event.target;
  //     //this is called object destructuring
  //     type === "checkbox" ?
  //       this.setState({ [name]: checked }) :
  //       this.setState({ [name]: value });
  //   }
  //   componentDidUpdate(){
  //     if(this.state.First){
  //         document.getElementById("First").innerHTML="First, "
  //       }
  //       else{
  //         document.getElementById("First").innerHTML=""
  //       }
  //       if(this.state.Second){
  //         document.getElementById("Second").innerHTML="Second, "
  //     }
  //     else{
  //         document.getElementById("Second").innerHTML=""
  //     }
  //     if(this.state.Third){
  //         document.getElementById("Third").innerHTML="Third"
  //     }
  //     else{
  //         document.getElementById("Third").innerHTML=""
  //     }
  //   }
  //   render() {
  //     return (

        
  //       <main>
  //         <form>
            
  //         <textarea name="comments" 
  //         placeholder="Nots">
            
  //        </textarea>
  //        <br/>
            
  //           <label>
  //           <input
  //             type="checkbox"
  //             name="First"
  //             checked={this.state.First}
  //             onChange={this.handleChange}
  //           />{" "}
  //         tested and dischared 

  //         </label>
  //         <br/>
  //         <label>
  //           <input
  //             type="checkbox"
  //             name="Second"
  //             checked={this.state.Second}
  //             onChange={this.handleChange}
  //           />{" "}

  //             tested and overnight
         
  //         </label>
  //         <br/>
  //         <label>
  //           <input
  //             type="checkbox"
  //             name="Third"
  //             checked={this.state.Third}
  //             onChange={this.handleChange}
  //           />{" "}

  //             admitted in hospital
         
  //         </label>
            
  //           <br />
  //           <button>Submit</button>
  //         </form>
         
  //         <p id="First">
  //         </p>
  //         <p id="Second"></p>
  //         <p id="Third"></p>
  //       </main>
  //     );
  //   }
  // }

  // export default Doctors