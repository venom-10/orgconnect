const express = require('express');
const router = express.Router();

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
            
            if(userExist){ return res.status(422).json({error: "Email already exists"});}

            const user = new User({ name, email, password, cpassword});

            await user.save();
            
            res.status(201).json({ message: "User registered Sucessfully"});

    }catch(err){
        console.log(err);
    }
});

router.post('/signin', async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json("Please Fill the data");
        }

        const userLogin = await User.findOne({email:email});

        if(!userLogin){
            res.status(400).json({message: "No User Found!!"});
        }else{
            res.json({message: "User signin sucessfully"});
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
