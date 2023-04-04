const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn')

app.use(express.json());

app.use(require('./router/auth'));
app.use(require("./router/controllers"));

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})    