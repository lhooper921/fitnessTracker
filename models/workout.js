
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type required"
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name required"
        },
        duration: {
          type: Number,
          required: "Exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  })

//   To use our schema definition, we need to convert our workoutSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
  const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;