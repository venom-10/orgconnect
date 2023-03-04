const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send(`Hello World from router.js`);
});

router.post('/register', async(req,res) => {
    const {name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the fields "});
    }
    
    try{
            const userExist = await User.findOne({email: email});
            
            if(userExist){ 
                return res.status(422).json({message: "Email already exists"});
            }else if(password != cpassword){
                return res.status(422).json({message: "Make sure password and current password are same"});
            }else{
                
                const user = new User({ name, email, password, cpassword});
    
                await user.save();
                
                return res.status(201).json({ message: "User registered Sucessfully"});
            }

    }catch(err){
        console.log(err);
    }
});

router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body;
        console.log("this is back", email, password
        );
        if(!email || !password) {
            return res.status(400).json("Please Fill the data");
        }

        const userLogin = await User.findOne({email:email});

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
})

module.exports = router;
