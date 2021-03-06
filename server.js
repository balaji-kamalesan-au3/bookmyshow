const express = require('express')
const path = require('path')
const nodemailer = require("nodemailer");
const app = express();


// Database

const db = require("./Config/database")
var bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({
    extended: false
  }));

// User Routes

app.use('/users',require("./Routes/userRoutes"))

app.use("/movies",require("./Routes/movieRoutes"))

app.use("/theatres",require("./Routes/theatreRoutes"))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  });
  
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`) )