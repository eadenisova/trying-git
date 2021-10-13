




const patients = require("./patients");
// hardcoding id 2412 for now, we can make this dynamic later
const PN = (process.argv[2]);

const specificPatient = patients.find(function(patient) {
  return PN === patient.phoneNumber;
  
});

console.log("OUTPUT:", specificPatient);