const express = require('express');
const router = express.Router();
const Prescription = require('../models/prescription.js');
const User = require('../models/users.js');


//get a list of prescriptions
router.get('/prescription', function(req, res,next){
  Prescription.find({}).then(function(prescriptions){
    res.send(prescriptions);
  });
});

//get prescription by id
router.get('/prescription/:insurancePolicyNumber', function(req, res,next){
  Prescription.find({insurancePolicyNumber: req.params.insurancePolicyNumber}).then(function(prescription){
     res.send(prescription);
   }).catch(next);
});

//add new prescription db
router.post('/prescription', function(req, res,next){
  //speichert alles in der db
  Prescription.create(req.body).then(function(prescription){
    res.send(prescription);
  }).catch(next);
});

//update prescription by id
router.put('/prescription/:id',function(req, res,next){
  Prescription.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Prescription.findOne({_id: req.params.id}).then(function(prescription){
       res.send(prescription);
     });
  });
});

//Delete prescription by id
router.delete('/prescription/:id', function(req, res,next){
 Prescription.findByIdAndRemove({_id: req.params.id}).then(function(prescription){
    res.send(prescription);
  });
});

//users
//get a list of users
router.get('/users', function(req, res,next){
  User.find({}).then(function(users){
    res.send(users);
  });
});

//get user by id
router.get('/users/:id', function(req, res,next){
  User.findOne({_id: req.params.id}).then(function(user){
     res.send(user);
   }).catch(next);
});

//add new user db
router.post('/users', function(req, res,next){
  //speichert alles in der db
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

//update user by id
router.put('/users/:id',function(req, res,next){
  User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    User.findOne({_id: req.params.id}).then(function(user){
       res.send(user);
     });
  });
});

//Delet user by id
router.delete('/users/:id', function(req, res,next){
 User.findByIdAndRemove({_id: req.params.id}).then(function(user){
    res.send(user);
  });
});

module.exports = router;
