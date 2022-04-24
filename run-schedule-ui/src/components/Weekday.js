import React from "react";
import Workout from "./Workout";
import { ListGroup } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import CreateWorkout from "../pages/CreateWorkout";

function Weekday({ weekday, workouts }) {

    // Filter for weekday specific workouts
    // const filterWorkouts = async 
    let dayName = null;
    switch (weekday) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
    }

    return (
        <>
            <h1>{dayName}
                <Popup trigger={<button>+</button>}>
                    <CreateWorkout weekday={weekday}/>
                </Popup>
            </h1>
            <ListGroup>
                {workouts.map((workout, i) => <Workout workout={workout} key={i} />)}
            </ListGroup>

        </>
    );
}

export default Weekday;