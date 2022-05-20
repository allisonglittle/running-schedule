import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function WeeklyDistance({ distance, sumWorkouts, units, setUnits }) {
    // For toggling radio button state
    const [isLoading, setLoading] = useState(false);

    const radios = [{ value: "miles" }, { value: "km" }];

    const updateDistance = async (units) => {
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
                {/* {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={units === radio.value}
                        disabled={isLoading}
                        onClick={() => updateDistance(radio.value)}
                    >
                        {isLoading ? 'Loading…' : radio.value}
                    </ToggleButton>
                ))} */}
                <Button onClick={() => updateDistance("miles")}>Miles</Button>
                <Button onClick={() => updateDistance("km")}>Km</Button>
            </ButtonGroup>
        </div>
    );
}

export default WeeklyDistance;