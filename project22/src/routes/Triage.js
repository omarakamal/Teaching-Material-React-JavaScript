import React from "react";
// import {getPatients} from "./Data"

import { Outlet,NavLink ,  useSearchParams} from "reacta-router-dom";
// import { getPatients } from "./Data";

export default function Triage() {
  

    let patients = JSON.parse(localStorage.getItem("MD"))
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
          {patients
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
                to={`/triage/${patient.nationalID}`}
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