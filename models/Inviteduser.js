const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvitedUserSchema = new Schema ({
    email: {
        type: String,
        required: [true, "please provide an email"],
        max: 50,
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
      },
    usertype:{
        type: String,
        required: [true,"please provide the user type"] 
    },
    teacherid:{
      type: String,
      required: [true,"please provide the teacherid"] 
  },
  studentid:{
    type: String,
    required: [true,"please provide the studentid"] 
}
})
const InvitedUser= mongoose.models.InvitedUser || mongoose.model("InvutedUser", InvitedUserSchema);
module.exports = InvitedUser;
