const patients = require("./patients");

// map executes the callback function for each element
const patientId = patients.map(function(patient) {
//   console.log("WHAT IS PATIENT", patient);

  // desctructure the firstName and the lastName from the patient object
  const {id} = patient;

  // return a string combining the firstName and the lastName
  return `${id}`;
});

console.log(patientId);

// Write a program with which researchers can get an array of phoneNumbers
// Write a program with which researchers can get an array of ids of their patients