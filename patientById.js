

const patients = require("./patients");
// hardcoding id 2412 for now, we can make this dynamic later
const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function(patient) {
  return id === patient.id;
  
});

console.log("OUTPUT:", specificPatient);