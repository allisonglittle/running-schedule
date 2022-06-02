import React from 'react';
import Calendar from '../components/Calendar';
import { useState, useEffect } from 'react';
import NewFeatures from '../components/NewFeatures';
import { useNavigate } from 'react-router-dom';
import WeeklyDistance from '../components/WeeklyDistance';

function HomePage() {
    // workouts: array of workouts in db
    // setWorkouts: function to update workouts array
    const [workouts, setWorkouts] = useState([]);

    const [distance, setDistance] = useState(0);
    const [units, setUnits] = useState("miles");

    // Function for loading all workouts from db
    const loadWorkouts = async () => {
        const response = await fetch('/all_workouts/');
        const data = await response.json();
        setWorkouts(data);
        sumWorkouts(units);
    }

    // Function for summing all workout distance
    const sumWorkouts = async (unit) => {
        const response = await fetch(`/sum_workouts?unit=${unit}`);
        const data = await response.json();
        setDistance(data.Distance);
    }

    // Call load workouts
    useEffect(() => {
        loadWorkouts();
    }, []);

    // Function for deleting a workout by id
    const onDelete = async _id => {
        const response = await fetch(`/workouts/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            loadWorkouts();
        } else {
            console.error(`Failed to delete workout with _id = ${_id}, status code ${response.status}`);
        }
    };

    return (
        <>
            <NewFeatures />
            <h1>Run Schedule</h1>
            <label>Choose week
                <select>
                    <option>Week 1</option>
                    <option>Week 2</option>
                </select>
            </label>
            <Calendar workouts={workouts} onDelete={onDelete} loadWorkouts={loadWorkouts} />
            <WeeklyDistance distance={distance} sumWorkouts={sumWorkouts} units={units} setUnits={setUnits}  />
        </>
    );
}

export default HomePage;