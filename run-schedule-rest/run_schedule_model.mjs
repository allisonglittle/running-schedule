// Get the mongoose object
import mongoose from 'mongoose';

// Identify database run_schedule_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/run_schedule_db',
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

// Have mongoose create indexes, this helps with faster querying
mongoose.set('useCreateIndex', true);

/**
 * Define the schema
 */
 const workoutSchema = mongoose.Schema({
    name: { type: String, required: true },
    day: { type: Number, required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    target: { type: String, required: true },
    pace: { type: String, required: true }
});

/**
 * Compile the model from the schema
 */
 const Workout = mongoose.model("Workout", workoutSchema);

 /**
  * Create a workout
  * @param {String} name 
  * @param {Number} day 
  * @param {Number} distance 
  * @param {Number} duration 
  * @param {String} target 
  * @param {String} pace 
  */
const createWorkout = async ( name, day, distance, duration, target, pace ) => {
    // Call the constructor to create a new instance of model class Workout
    const workout = new Workout({ name: name, day: day, distance: distance, duration: duration, 
        target: target, pace: pace})
    // Call save to persist instance as an object in MongoDB
    return workout.save()
}
