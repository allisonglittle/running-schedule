import React from "react";
// import { Container, Col, Row } from 'react-bootstrap';
import Weekday from "./Weekday";

function Calendar({ workouts, onDelete }) {
    return (
        // <Container fluid>
        //     <Row>
        //         <Col><Weekday weekday={1} workouts={workouts} /></Col>
        //         <Col><Weekday weekday={2} workouts={workouts} /></Col>
        //         <Col><Weekday weekday={3} workouts={workouts} /></Col>
        //     </Row>
        // </Container>
        // <ListGroup horizontal>
        //     <ListGroup.Item>Monday
        //         <Weekday weekday={1} workouts={workouts}/>
        //     </ListGroup.Item>

        //     <ListGroup.Item>Tuesday</ListGroup.Item>
        // </ListGroup>
        <table className="Calendar-table">
            {/* <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                </tr>

            </thead> */}
            <tbody>
                <tr>
                    <td className="Calendar-day"><Weekday weekday={1} workouts={workouts.filter(m => m.day === 1)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={2} workouts={workouts.filter(m => m.day === 2)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={3} workouts={workouts.filter(m => m.day === 3)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={4} workouts={workouts.filter(m => m.day === 4)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={5} workouts={workouts.filter(m => m.day === 5)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={6} workouts={workouts.filter(m => m.day === 6)} onDelete={onDelete} /></td>
                    <td className="Calendar-day"><Weekday weekday={7} workouts={workouts.filter(m => m.day === 7)} onDelete={onDelete} /></td>
                </tr>

            </tbody>
        </table>
    );
}

export default Calendar;