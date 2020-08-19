const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    foodname:{
        type:String,
     
    },
    foodimage:{
        type:String
    },
    price:{
        type:String,
     
    },
    resturantName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resturant'
    }
   
},{timestamps:true});

module.exports=mongoose.model('Food',foodSchema);