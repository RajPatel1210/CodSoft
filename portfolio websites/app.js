const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.static(""))










app.listen(3000,function(){
    console.log("server started at 3000")

})