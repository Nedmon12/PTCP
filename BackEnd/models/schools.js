const mongoose = require('mongoose')
const { string } = require('prop-types')

const SchoolSchema = new mongoose.Schema({
    schoolId : {
        type: String,
        required: true
    },
    schoolName : {
        type: String,
        required: true
    },
    schoolAdmin: {
        type: String,
        required: true // reference to schoolAdmin id to be refactored
    },
    subscriptionStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("School", SchoolSchema)