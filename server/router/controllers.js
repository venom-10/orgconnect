const express = require("express");
const router = express.Router();
const multer = require("multer");

require("../db/conn");
const Logindb = require('../model/loginSchema')
const Personaldb = require("../model/personalDeatailsSchema");
const postData = require("../model/postDataSchema");

// For multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Router for User Details Page
router.post("/userDetails", async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    phone,
    gender,
    city,
    state,
    address,
    dob,
    intro,
    secondarySchool,
    secondaryPercent,
    secondaryPassingYear,
    secondaryBoard,
    higherSchool,
    higherPercent,
    higherPassingYear,
    higherBoard,
    graduationDegree,
    graduationCollge,
    graduationPassingYear,
    graduationCGPA,
    postgradDegree,
    postgradCollge,
    postgradPassingYear,
    postgradCGPA,
    phdSpecialization,
    phdTitle,
    phnCollege,
    phdDate,
    skills,
    workMonths,
    jobTitle,
    companyName,
    jobStartDate,
    location,
    currentJob,
  } = req.body;

  if (!firstName || !email || !lastName) {
    return res.status(422).json({ error: "Please fill required the fields " });
  }

  try {
    const userExist = await Personaldb.findOne({ email: email });

    if (userExist) {
      try {
        const requestKeys = Object.keys(req.body);
        const requestValues = Object.values(req.body);
        for (let i = 0; i < requestKeys.length; i++) {
          if (requestValues[i] !== "") {
            console.log(requestValues[i]);
            updateQuery[requestKeys[i]] = requestValues[i];
          }
        }
        const updatedObject = await Personaldb.updateOne(
          { email: email },
          { $set: updateQuery }
        );

        await updatedObject.save();

        res.json(updatedObject);
      } catch (error) {
        res.status(400).send({ message: error });
      }
    } else {
      const user = new Personaldb({
        email,
        firstName,
        lastName,
        phone,
        gender,
        city,
        state,
        address,
        dob,
        intro,
        secondarySchool,
        secondaryPercent,
        secondaryPassingYear,
        secondaryBoard,
        higherSchool,
        higherPercent,
        higherPassingYear,
        higherBoard,
        graduationDegree,
        graduationCollge,
        graduationPassingYear,
        graduationCGPA,
        postgradDegree,
        postgradCollge,
        postgradPassingYear,
        postgradCGPA,
        phdSpecialization,
        phdTitle,
        phnCollege,
        phdDate,
        skills,
        workMonths,
        jobTitle,
        companyName,
        jobStartDate,
        location,
        currentJob,
      });

      await user.save();

      return res
        .status(201)
        .json({ message: "Personal Details Saved Sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// For Uploading The Image and Post Data

router.post("/upload", upload.single("postedImage"), async (req, res) => {
  try {
    const { username, postedText } = req.body;
    let postedImage;
    if (req.file) {
      postedImage = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }
    const newPost = new postData({ username, postedText, postedImage });
    const post = await newPost.save();
    res.status(200).send("File uploaded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
});
// Getting Post data
router.get("/getData", async (req, res) => {
  try {
    const Data = await postData.find({});
    res.json(Data);
    res.end();
  } catch (err) {
    console.log(err);
  }
});


// Getting User Info
router.get('/getUser', async (req, res)=>{
  try{
    const email = req.query.email;
    const Data = await Personaldb.find({email})
    res.json(Data);
    res.end();
  }
  catch(err){
    console.log(err);
  }
})

// Getting UserImage
router.get('/getUserImage', async (req, res)=>{
  try{
    const email = req.query.email;
    const result = await Logindb.find({email})
    const Data = result[0].profile;
    res.json(Data)
    console.log(Data);
    res.end()
  }
  catch(err){
    console.log(err)
  }
})

module.exports = router;
