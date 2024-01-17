let mongoose=require('mongoose')
const Patientschema=new mongoose.Schema({
        patientfirstname:String,  
        patientlastname:String,   
        patientaddress:String, 
        patientage:Number,
        patientdob:Number,
        patientgender:String,
        patientbloodgroup:String,
        patientoccupation:String,
        patientemail:String,
        patientcontactno:Number,
        guardianrelationship:String,
        guardianfirstname:String,
        guardianlastname:String,
        emergencyname:String,
        emergencyrelationship:String,
        emergencyaddress:String,
        emergencycontactno:Number,
        emergencyemail:String,
        identityproof:String,
        identitycardno:Number,
        identityauthority:String,
})
const PatientModel=new mongoose.model("Patient",Patientschema)
module.exports=PatientModel