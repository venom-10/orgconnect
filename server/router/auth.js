const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const Logindb = require('../model/loginSchema');
const Personaldb = require('../model/personalDeatailsSchema');

router.get('/',(req,res) => {
    res.send(`Hello World from router.js`);
});

// Router for Registration page
router.post('/register', async(req,res) => {
    const {name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the fields "});
    }
    
    try{
            const userExist = await Logindb.findOne({email: email});
            
            if(userExist){ 
                return res.status(422).json({message: "Email already exists"});
            }else if(password != cpassword){
                return res.status(422).json({message: "Make sure password and current password are same"});
            }else{
                
                const user = new Logindb({ name, email, password, cpassword});
    
                await user.save();
                
                return res.status(201).json({ message: "User registered Sucessfully"});
            }

    }catch(err){
        console.log(err);
    }
});

// Router for Login Page
router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body;
        console.log("this is back", email, password
        );
        if(!email || !password) {
            return res.status(400).json("Please Fill the data");
        }

        const userLogin = await Logindb.findOne({email:email});

        if(userLogin){
            const isCorrect = await bcrypt.compare(password, userLogin.password);
            if(!isCorrect){
                return res.status(400).json({message: "Invalid Credentials"});
            }else{
                return res.status(200).json({message: "User signin sucessfully"});
            }
        }else{
            return res.status(400).json({message: "Invalid Credentials"});
        }
    }catch(err){
        console.log(err);
    }
});

// Router for User Details Page
router.post('/userDetails', async(req,res) => {
    const { email, firstName, lastName, phone,
        gender, city, state, address, dob, 
        secondarySchool, secondaryPercent, secondaryPassingYear, secondaryBoard, 
        higherSchool, higherPercent, higherPassingYear, higherBoard,
        graduationDegree, graduationCollge, graduationPassingYear, graduationCGPA,
        postgradDegree, postgradCollge, postgradPassingYear, postgradCGPA,
        phdSpecialization, phdTitle, phnCollege, phdDate,
        skills, workMonths, jobTitle, companyName,
        jobStartDate, location, currentJob } = req.body;

    if(!firstName || !email || !lastName ){
        return res.status(422).json({error: "Please fill required the fields "});
    }
    
    try{
            const userExist = await Personaldb.findOne({email: email});
            
            if(userExist){ 
                try{
                    const requestKeys = Object.keys(req.body);
                    const requestValues = Object.values(req.body);
                    for (let i = 0; i < requestKeys.length; i++) {
                        if (requestValues[i] !== ""){
                            console.log(requestValues[i])
                            updateQuery[requestKeys[i]] = requestValues[i]
                        }
                    }
                    const updatedObject = await Personaldb.updateOne(
                        { email:email},
                        { $set: updateQuery }
                    );

                    await updatedObject.save();

                    res.json(updatedObject)
                }catch (error) {
                    res.status(400).send({ message: error });
                }
            }else{
                
                const user = new Personaldb({ email, firstName, lastName, phone,
                    gender, city, state, address, dob, 
                    secondarySchool, secondaryPercent, secondaryPassingYear, secondaryBoard, 
                    higherSchool, higherPercent, higherPassingYear, higherBoard,
                    graduationDegree, graduationCollge, graduationPassingYear, graduationCGPA,
                    postgradDegree, postgradCollge, postgradPassingYear, postgradCGPA,
                    phdSpecialization, phdTitle, phnCollege, phdDate,
                    skills, workMonths, jobTitle, companyName,
                    jobStartDate, location, currentJob });
    
                await user.save();
                
                return res.status(201).json({ message: "Personal Details Saved Sucessfully"});
            }

    }catch(err){
        console.log(err);
    }
});


module.exports = router;
