const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://holmma:1q2w3e@ds125241.mlab.com:25241/artist_projekt_vs');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//inizialisiert routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req,res,next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

//listen do request
app.listen(process.env.port||4000, function(){
  console.log('listen for request');
})
