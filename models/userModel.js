const mongoose = require('mongoose')

// Schema Design
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, 'Name is required']
    },
    email:{
        type : String,
        required : [true, 'Email is required and unique']
    },
    password:{
        type : String,
        required : [true, 'Password is required']
    },
})


// export
const userModel = mongoose.model('users',userSchema);
module.exports = userModel;