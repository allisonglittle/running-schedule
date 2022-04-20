import * as workouts from './run_schedule_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

/**
 * Create new workout with input parameters in request body
 */
 app.post('/workout', (req, res) => {
    workouts.createWorkout(req.body.name, req.body.day, req.body.distance, req.body.duration, req.body.target, req.body.pace)
        .then(Workout => {
            res.status(201).json(Workout);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 400.
            res.status(400).json({ Error: 'Request failed' });
        });
});