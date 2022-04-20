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
