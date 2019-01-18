const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create users Schema
const usersSchema = new Schema({
  username:{
    type: String,
    required:[true, 'username fild is require']
  },
  passwort:{
    type: String,
    required:[true, 'passwort fild is require']
  },
  doctor:{
    "personalnumber": {
      type : String,
      required:[true, 'personalnumber fild is require']
    }
  },
  pharmacy: {
    "pharmacyID": {
      type : String,
      required:[true, 'pharmacyID fild is require']
      }
  }
});
const prescription = mongoose.model('UsersCollection', usersSchema);
module.exports = prescription;
