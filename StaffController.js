const StaffModel= require("./StaffSchema")
const addstaff=(req, res) => {
    let newStaff = new StaffModel({
      fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    aadhar:req.body.aadhar ,
    dob: req.body.dob,
    address: req.body.address,
    weight: req.body.weight,
    height:req.body.height,
    bloodGroup: req.body.bloodGroup
      
    });
    newStaff
      .save()
      .then((data) => {
        console.log("Staff date saved");
        res.json({
          status: 200,
          msg: "Staff data saved",
          data: data,
        });
      })
      .catch((err) => {
        console.log("error");
        res.json({
          status: 500,
          msg: "Staff data not saved",
          data: err,
        });
      });
    }
    
    module.exports={addstaff}