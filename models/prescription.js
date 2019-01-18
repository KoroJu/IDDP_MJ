const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create artist Schema
const prescriptionSchema = new Schema({
  Patient: {    //sollte nur Patient ID haben
    "firstname":{
      type: String,
      required:[true, 'firstname fild is require']
    },
    "lastname":{
      type: String,
      required:[true, 'lastname fild is require']
    },
    "insurancePolicyNumber" :{
      type: String,
      required:[true, 'insurancePolicyNumber fild is require']
    }
  },
  Doctor:{      //sollte nur Doc ID haben
    "firstname":{
      type: String,
      required:[true, 'firstname fild is require']
    },
    "lastname":{
      type: String,
      required:[true, 'lastname fild is require']
    },
    "personalnumber" :{
      type: String,
      required:[true, 'personalnumber fild is require']
    }
  },
  "description":{
    type: String,
    required:[true, 'description fild is require']
  },
  "date" : {
    type : String,
    required:[true, 'date fild is require']
  }
});
const prescription = mongoose.model('prescriptionCollection', prescriptionSchema);
module.exports = prescription;
