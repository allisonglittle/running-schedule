import React from 'react';
import Calendar from '../components/Calendar';
import { useState, useEffect } from 'react';
import NewFeatures from '../components/NewFeatures';
// import { useHistory } from 'react-router-dom';

function HomePage() {
    // workouts: array of workouts in db
    // setWorkouts: function to update workouts array
    const [workouts, setWorkouts] = useState([]);
    // const history = useHistory();

    // Function for loading all workouts from db
    const loadWorkouts = async () => {
        const response = await fetch('/all_workouts');
        const data = await response.json();
        setWorkouts(data);
    }

    // Call load workouts
    useEffect(() => {
        loadWorkouts();
    }, []);

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
            <Calendar workouts={workouts} />
        </>
    );
}

export default HomePage;