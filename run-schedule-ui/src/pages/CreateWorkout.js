import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutDetails from '../components/WorkoutDetails';

function CreateWorkout({ weekday }) {
    // Fields to be filled for workout
    const [name, setName] = useState('');
    const [day, setDay] = useState(weekday);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [target, setTarget] = useState('');
    const [pace, setPace] = useState('');

    const navigate = useNavigate();

    const addWorkout = async () => {
        // Create object with the entered parameters
        const newWorkout = {name, day, distance, duration, target, pace};
        const response = await fetch('/workout', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status !== 201) {
            alert(`Failed to add workout, status code ${response.status}`);
        } else {
            alert(`Workout added to schedule.`);
        }
        // Return to home page
        navigate.push("/");
    };

    return (
        <>
            <h1>New Workout</h1>
            <WorkoutDetails name={name} setName={setName} day={day} setDay={setDay} distance={distance} setDistance={setDistance} duration={duration} setDuration={setDuration} target={target} setTarget={setTarget} pace={pace} setPace={setPace} />
            <button onClick={addWorkout}>Add Workout</button>
        </>
    );
}

export default CreateWorkout;