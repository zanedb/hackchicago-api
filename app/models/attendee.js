const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AttendeeSchema = new Schema({
  fname: String,
  lname: String,
  email: String
});

module.exports = mongoose.model('Attendee', AttendeeSchema);