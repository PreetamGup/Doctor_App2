const express = require('express');


const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path')

// configure the dotenv
dotenv.config();

// mongoDB connection
connectDB();

// rest Object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'))
app.use('/api/v1/doctor', require('./routes/doctorRoutes'))

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// listen port
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} Mode on port ${port}`);
})