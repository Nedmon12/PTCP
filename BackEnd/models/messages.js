const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      required:[true,"conversation id id required "]
    },
    sender: {
        type: String,
        required:[true,"sender id id required "]
    },
    text: {
        required:[true,"text required "],  
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
