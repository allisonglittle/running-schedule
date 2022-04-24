import React from "react";
import { ListGroup } from "react-bootstrap";

function Workout({ workout }) {
    return (
        // <>
        //     {workout.name}
        // </>
        <ListGroup.Item>
            {workout.name}
        </ListGroup.Item>
    );
}

export default Workout;