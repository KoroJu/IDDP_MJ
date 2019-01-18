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
   personalnumber: {
      type : String
    },
    insurancePolicyNumber:{
      type: Array
    }
  },
  pharmacy: {
    pharmacyID: {
      type : String
      }
  }
});
const prescription = mongoose.model('UsersCollection', usersSchema);
module.exports = prescription;
