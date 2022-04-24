import React from "react";
import Form from 'react-bootstrap/Form';

function WorkoutDetails({ name, setName, day, setDay, distance, setDistance, duration, setDuration, target, setTarget, pace, setPace }) {
    return (
        <Form>
            <Form.Select value={day} onChange={e => setDay(e.target.value)}>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>
            </Form.Select>
            <br />
            <Form.Label>Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </Form.Label>
            <br />
            <Form.Select value={target} onChange={e => setTarget(e.target.value)}>
                <option value="Duration">Duration</option>
                <option value="Distance">Distance</option>
            </Form.Select>
            <br />
            <Form.Label>Target Distance:
                <input type="number" value={distance} onChange={e => setDistance(e.target.value)} />
            </Form.Label>
            <br />
            <Form.Label>Target Duration (in minutes):
                <input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
            </Form.Label>
            <br />
            <Form.Label>Target Pace:
                <input type="text" value={pace} onChange={e => setPace(e.target.value)} />
            </Form.Label>
        </Form>
    );
}

export default WorkoutDetails;