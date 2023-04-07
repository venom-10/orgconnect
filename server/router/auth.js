const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");

require("../db/conn");
const Logindb = require("../model/loginSchema");


router.get("/", (req, res) => {
  res.send(`Hello World from router.js`);
});

// Router for Registration page
router.post("/register", async (req, res) => {

  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the fields " });
  }

  try {
    const userExist = await Logindb.findOne({ email: email });
    const userExistWithName = await Logindb.findOne({ name:name })
    if (userExist || userExistWithName) {
      return res.status(422).json({ message: "Email or Name already exists" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ message: "Make sure password and current password are same" });
    } else {
      const user = new Logindb({ name, email, password, cpassword });

      await user.save();

      return res.status(201).json({ message: "User registered Sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Router for Login Page
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("Please Fill the data");
    }

    const userLogin = await Logindb.findOne({ email: email });

    if (userLogin) {
      const isCorrect = await bcrypt.compare(password, userLogin.password);
      if (!isCorrect) {
        return res.status(400).json({ message: "Invalid Credentials" });
      } else {
        return res.status(200).json({ message: "User signin sucessfully" });
      }
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
