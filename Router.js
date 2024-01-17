const express = require("express");
const router = express.Router();
const Patientcontroller=require('./Patientcontroller');
router.post("/addpatient",Patientcontroller.addpatient);
module.exports = router;