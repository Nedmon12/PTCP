const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
     teacherid: {
      type: String,
      required: true,
    },
    title: {
        required: true ["title is required"],
        type: String,
        max: 500,
      },
    desc: {
      type: String,
      max: 500,
    },
    startingdate: {
      type: String,
    },
    enddate: {
      type: Array,
    },
    startingtime: {
      type: String,
    },
    endtime: {
        type: String,
      },
    reminder: {
          type: String,
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
