const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const conn = require("../db/conn");

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  profile: {
    data: Buffer,
    contentType: String
  },
});

//Hashing
loginSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
} )

loginSchema.pre("save", function (next) {
  // Convert the name field to lowercase before saving
  this.name = this.name.toLowerCase();
  next();
});


const Login = mongoose.login.model('details',loginSchema);

module.exports = Login;
