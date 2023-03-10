const mongoose = require('mongoose');
const dotenv = require("dotenv");
mongoose.set("strictQuery", false);
dotenv.config({ path: "../.env" })


mongoose.login = mongoose.createConnection(process.env.DB_LOGIN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.details = mongoose.createConnection(process.env.DB_DETAILS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if(mongoose.login){
    console.log(`Login connection sucessfull`);
}else{
    console.log(`Login connection unsucessfull`);
}
if(mongoose.details){
    console.log(`Personal details connection sucessfull`);
}else{
    console.log(`Personal details connection unsucessfull`);
}

mongoose.exports = mongoose;