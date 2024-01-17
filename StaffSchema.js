let mongoose=require("mongoose")
const newstaff=new mongoose.Schema({
    fullName: String,
    email: String,
    password: Number,
    confirmPassword: Number,
    gender: String,
    phoneNumber: Number,
    aadhar:Number ,
    dob: Number,
    address: String,
    weight: Number,
    height: Number,
    bloodGroup: String
})
const StaffSchema=new mongoose.model("Staff",newstaff)
module.exports=StaffSchema