import React from "react";
import { ListGroup } from "react-bootstrap";

function Workout({ workout }) {
    return (
        // <>
        //     {workout.name}
        // </>
        <ListGroup.Item>
            {workout.name} 
            <button onClick={() => window.confirm('Are you sure you wish to delete this item?')}>Delete</button>
        </ListGroup.Item>
    );
}

export default Workout;