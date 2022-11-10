const mongoose = require('mongoose');

module.exports = function (){
    mongoose.connect("<uri>")
.then(()=>{
    console.log("connected to db");
}).catch((e)=>{
    console.log(e);
    console.log("error connecting to db");
})
}