const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create artist Schema
const prescriptionSchema = new Schema({
  "insurancePolicyNumber" :{
    type: String,
    required:[true, 'insurancePolicyNumber fild is require']
  },
  "personalnumber" :{
    type: String,
    required:[true, 'personalnumber fild is require']
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
