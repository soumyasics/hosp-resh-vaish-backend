const express = require("express");
const router = express.Router();
const Patientcontroller=require('./Patientcontroller');
const StaffController=require('./StaffController');




router.post("/addStaff",StaffController.addstaff);

router.post("/addpatient",Patientcontroller.addpatient);
module.exports = router;