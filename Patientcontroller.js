const PatientModel= require("./Patientschema")
const addpatient=(req, res) => {
    let newpatient = new PatientModel({
        patientfirstname:req.body.patientfirstname,
        patientlastname:req.body.patientlastname,
        patientaddress:req.body.patientaddress, 
        patientage:req.body.patientage,
        patientdob:req.body.patientdob,
        patientgender:req.body.patientgender,
        patientbloodgroup:req.body.patientbloodgroup,
        patientoccupation:req.body.patientoccupation,
        patientemail:req.body.patientemail,
        patientcontactno:req.body.patientcontactno,
        guardianrelationship:req.body.guardianrelationship,
        guardianfirstname:req.body.guardianfirstname,
        guardianlastname:req.body.guardianlastname,
        emergencyname:req.body.emergencyname,
        emergencyrelationship:req.body.emergencyrelationship,
        emergencyaddress:req.body.emergencyaddress,
        emergencycontactno:req.body.emergencycontactno,
        emergencyemail:req.body.emergencyemail,
        identityproof:req.body.identityproof,
        identitycardno:req.body.identitycardno,
        identityauthority:req.body.identityauthority
    });
    newpatient
      .save()
      .then((data) => {
        console.log("Patient Data saved.......");
        res.json({
            status: 200,
            msg: "Data saved",
            data: data,
          });
        })
        .catch((err) => {
          console.log("error");
          res.json({
            status: 500,
            msg: "Data not saved",
            data: err,
          });
        });
      }

      module.exports={addpatient}