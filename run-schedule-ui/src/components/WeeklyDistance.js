import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

function WeeklyDistance({ distance, sumWorkouts, setUnits }) {

    const updateDistance = async (units) => {
        setUnits(units);
        sumWorkouts();
    }

    return (
        <div>
            <p>Weekly Distance:</p>
            <p>{distance}</p>
            <ButtonGroup>
                <Button onClick={() => updateDistance("miles")}>Miles</Button>
                <Button onClick={() => updateDistance("km")}>Km</Button>
            </ButtonGroup>
        </div>
    );
}

export default WeeklyDistance;