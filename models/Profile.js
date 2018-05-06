const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  }
})



const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
