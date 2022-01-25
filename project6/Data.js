let patients = [
    {
         firstName: "broce",
         lastName: "camble",
         Address:"76 street",
         nationalID: 1,
         Age:"11",
         bloodpressure:"45",
         heartrate:"123",
         weight:"80",
         allergies:"electronics",
         
 },

 {
    firstName: "will",
    lastName: "truman",
    Address:"76 street",
    nationalID: 2,
    Age:"22",
    bloodpressure:"45",
    heartrate:"123",
    weight:"80",
    allergies:"electronics",

    
},

{
    firstName: "mike",
    lastName: "gamble",
    Address:"97 street",
    nationalID: 3,
    Age:"33",
    bloodpressure:"45",
    heartrate:"123",
    weight:"80",
    allergies:"electronics",
    
}

];

export function getPatients() {
    return patients;
  }

  export function getPatient(nationalID) {
    return patients.find(
      patient => patient.nationalID === nationalID
    );
  }
