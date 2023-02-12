const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn')

app.use(express.json());

app.use(require('./router/auth'));


app.get('/about', (req,res) => {
    res.send(`This is about section`);
});

// app.get('/contact', (req,res) => {
//     res.send(`This is contact section   `);
// });

// app.get('/signin', (req,res) => {
//     res.send(`This is signin section`);
// });

// app.get('/signup', (req,res) => {
//     res.send(`This is signup section   `);
// });

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})    