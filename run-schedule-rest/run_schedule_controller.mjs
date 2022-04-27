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

/**
 * Retrive all workouts
 */
 app.get('/all_workouts', (req, res) => {
    workouts.findWorkouts(req.query, '', 0)
        .then(workouts => {
            res.status(200).json(workouts);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 400.
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Delete workout. Id is passed in query parameters.
 */
app.delete('/workouts/:_id', (req, res) => {
    workouts.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount == 1) {
                // Workout successfuly deleted
                res.status(204).sned();
            } else {
                res.status(400).json({Error: 'Workout not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).send({error: 'Request failed'});
        });
});