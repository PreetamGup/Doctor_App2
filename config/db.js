const mongoose = require('mongoose');



const connectDB = async() =>{
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongodb connect ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongo DB Server Issue ${error}`);
  }
};

module.exports = connectDB;