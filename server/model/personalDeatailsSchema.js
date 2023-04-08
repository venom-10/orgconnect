const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const conn = require("../db/conn");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    intro:{
        type:String,
        required: true
    },
    phone: {
        type: String,
    },
    gender: {
        type: String
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    dob: {
        type: Date,
        default: Date.now 
    },
    secondarySchool: {
        type: String
    },
    secondaryPercent: {
        type: String,
    },
    secondaryPassingYear: {
        type: String
    },
    secondaryBoard: {
        type: String,
    },
    higherSchool: {
        type: String
    },
    higherPercent: {
        type: String,
    },
    higherPassingYear: {
        type: String
    },
    higherBoard: {
        type: String,
    },
    graduationDegree: {
        type: String,
    },
    graduationCollge: {
        type: String,
    },
    graduationPassingYear: {
        type: String, 
    },
    graduationCGPA: {
        type: String
    },
    postgradDegree: {
        type: String,
    },
    postgradCollge: {
        type: String,
    },
    postgradPassingYear: {
        type: String,
    },
    postgradCGPA: {
        type: String
    },
    phdSpecialization: {
        type: String,
    },
    phdTitle: {
        type: String,
    },
    phdCollege: {
        type: String,
    },
    phdDate: {
        type: String
    },
    skills: {
        type: String,
    },
    workMonths: {
        type: String
    },
    jobTitle: {
        type: String,
    },
    companyName: {
        type: String,
    },
    jobStartDate: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String
    },
    currentJob: {
        type: String
    },

})



const User = mongoose.details.model('details',userSchema);

module.exports = User;
