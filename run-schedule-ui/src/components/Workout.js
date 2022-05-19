import React from "react";
import { ListGroup } from "react-bootstrap";

function Workout({ workout, onDelete }) {
    return (
        // <>
        //     {workout.name}
        // </>
        <ListGroup.Item>
            {workout.name} 
            <button onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) onDelete(workout._id) }}>Delete</button>
        </ListGroup.Item>
    );
}

export default Workout;