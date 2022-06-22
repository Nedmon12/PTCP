const mongoose = require('mongoose')
const { string } = require('prop-types')

const SchoolSchema = new mongoose.Schema({
    schoolName : {
        type: String,
        required: true
    },
    schooladresscity: {
        type: String,
        required: true // reference to schoolAdmin id to be refactored
    },
    subcity: {
        type: String,
        required: true // reference to schoolAdmin id to be refactored
    },
    zip: {
        type: String,
        required: true // reference to schoolAdmin id to be refactored
    },
    subscriptionStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    contact: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const School= mongoose.models.School || mongoose.model("School", SchoolSchema);
module.exports = School;
  
  
