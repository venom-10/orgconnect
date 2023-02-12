const mongoose = require('mongoose');
const dotenv = require("dotenv");

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));