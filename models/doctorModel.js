const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: {
        type: String,
      },
    firstName:{
        type:String,
        required:[true, 'First name is required']
    },
    lastName:{
        type:String,
        required:[true, 'Last name is required']
    },
    phone:{
        type:String,
        required:[true, 'phone number is required']
    },
    email:{
        type:String,
        required:[true, 'email is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true, 'address is required']
    },
    specialisation:{
        type:String,
        required:[true,'specialisation is required']
    },
    experience:{
        type:String,
        required:[true,'experience is required']
    },
    feesPerConsulation:{
        type:Number,
        required:[true,'fee is required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timings:{
        type:Object,
        required:[true,'work timing is required']
    }

},{timestamps:true});

const doctorModel = mongoose.model('doctors', doctorSchema);
module.exports = doctorModel;  
