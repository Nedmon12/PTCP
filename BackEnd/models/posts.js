const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    date : {
        type: Date,
        default: Date.now
    },
  
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
