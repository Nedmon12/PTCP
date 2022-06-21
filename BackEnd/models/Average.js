const mongoose = require("mongoose");

const AverageSchema = mongoose.Schema(
  {
     teacherid: {
      type: String,
      required: true,
    },
    studentid: {
        type: String,
        required: true,
      },
    Averagepoint: {
      type: Number,
      required : [true, "please provide a Average"]
    },
    reason: {
      type: String,
      required : [true, "please reason"]
    }
  },
);
const Average= mongoose.models.Average || mongoose.model("Average", AverageSchema);
module.exports = Average;