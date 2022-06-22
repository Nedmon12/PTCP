const { default: mongoose } = require('mongoose')
const mongooes = require('mongoose')

const ConversationSchema = new mongoose.Schema(
    {
    members: {
        type: Array
    },
    },
    { timestamps: true } 
)

module.exports = mongooes.model("Conversation", ConversationSchema)