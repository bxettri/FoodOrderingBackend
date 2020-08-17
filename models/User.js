const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    profileimage:{
        type: String
    },
  
  role: {
    type: String,
    default: 'customer',
    enum: ['customer', 'admin']
},


}, {timestamps:true});

module.exports = mongoose.model('User',userSchema);