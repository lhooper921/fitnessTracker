// Mongoose: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model. A “collection” of “documents” in a MongoDB database is analogous to a “table” of “rows” in a relational database.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values.
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

  // Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. 

workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


//   To use our schema definition, we need to convert our workoutSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema). Schemas are then "compiled" into models using the mongoose.model() method. Once you have a model you can use it to find, create, update, and delete objects of the given type.
  const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;