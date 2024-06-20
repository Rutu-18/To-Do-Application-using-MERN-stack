const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const app = express();
app.use(cors());

const taskRoutes = require('./routes/taskRoutes')

app.use(express.json())



mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected successfullt");
    app.listen(process.env.PORT)
    console.log("Running on",process.env.PORT);
})
.catch((error)=>{
    console.log(("Connection failed"));
})

app.use('/',taskRoutes)