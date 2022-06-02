// Get the mongoose object
import mongoose from 'mongoose';
import fetch from "node-fetch";

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
    week: { type: Number, required: true },
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
const createWorkout = async (name, day, distance, duration, target, pace) => {
    // Call the constructor to create a new instance of model class Workout
    const workout = new Workout({
        name: name, week: 1, day: day, distance: distance, duration: duration,
        target: target, pace: pace
    })
    // Call save to persist instance as an object in MongoDB
    return workout.save()
}


/**
 * Return all workouts that fit the filter, projection and the limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findWorkouts = async (filter, projection, limit) => {
    const query = Workout.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}


/**
 * Delete workout with the specified id.
 * @param {String} _id 
 * @returns 
 */
const deleteById = async (_id) => {
    const result = await Workout.deleteOne({ _id: _id });
    // Return the count of deleted document. Will be either 1 (workout deleted) or 0 (no workout found).
    return result.deletedCount;
}


/**
 * Uses a GET request to microservice to convert miles to km
 * @param {Number} milesDistance 
 * @returns Distance in km
 */
const convertKm = async (milesDistance) => {
    // Use unit converter to get distance in km
    const url = `https://distance-conversion.herokuapp.com/miles-to-km?miles=${milesDistance}`;
    const km = fetch(url, { method: "Get" })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then((json) => {
            console.log(json);
            return json.km;
        });
    return km;
}

/**
 * Get the sum of workout distances by specifying units
 * @param {String} unit 
 * @returns 
 */
const sumOfDistance = async (unit) => {
    // Get sum of distance in miles
    const workouts = findWorkouts();
    console.log(workouts);
    const sumWorkouts = await Workout.aggregate([
        { $group: { _id: "$week", sumDistance: { $sum: "$distance" } } }
    ]);
    const milesDistance = sumWorkouts[0].sumDistance;

    if (unit === "km") {
        return convertKm(milesDistance);
    }
    return milesDistance;
}

export { createWorkout, findWorkouts, deleteById, sumOfDistance };