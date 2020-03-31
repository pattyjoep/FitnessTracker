const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({ 
  
  day: {
    type: Date,
    default: Date.now
  },
  
  duration: {
    type: Number,
    default: 0
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const WorkoutDB = mongoose.model("WorkoutDB", WorkoutSchema);

module.exports = WorkoutDB;