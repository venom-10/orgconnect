const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.login = mongoose.createConnection("mongodb+srv://isneha:isnehapwd@cluster0.y0mryn4.mongodb.net/login-details?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.details = mongoose.createConnection("mongodb+srv://isneha:isnehapwd@cluster0.y0mryn4.mongodb.net/personal-details?retryWrites=true&w=majority", {
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