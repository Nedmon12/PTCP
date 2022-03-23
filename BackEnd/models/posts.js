const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    text:{
        type: String,
        required : true
    },
    name: {
        type: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text : {
                type: String,
                required : true
            },
            date : {
                type: Date,
                default: Date.now
            }
        }
    ],
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
