import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function WeeklyDistance({ distance, sumWorkouts, units, setUnits }) {
    // For toggling radio button state
    const [isLoading, setLoading] = useState(false);

    const updateDistance = (units) => {
        setLoading(true);
        
        if (isLoading) {
            sumWorkouts(units).then(() => {
                setLoading(false);
                setUnits(units);
            });
        }

    }

    return (
        <div>
            <p>Weekly Distance:</p>
            <p>{distance.toFixed(2)} {units}</p>
            <ButtonGroup>
                <Button onClick={() => updateDistance("miles")}>Miles</Button>
                <Button onClick={() => updateDistance("km")}>Km</Button>
            </ButtonGroup>
        </div>
    );
}

export default WeeklyDistance;