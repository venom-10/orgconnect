const dotenv = require("dotenv");
const express = require('express');
const app = express();
const ws = require('ws');
const cors = require('cors')

dotenv.config({path: './config.env'});
require('./db/conn')

app.use(express.json());
app.use(cors())
app.use(require('./router/auth'));
app.use(require("./router/controllers"));

const server = app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})    

const wss = new ws.WebSocketServer({server});

wss.on('connection', (connection)=>{
    console.log('connected');
})