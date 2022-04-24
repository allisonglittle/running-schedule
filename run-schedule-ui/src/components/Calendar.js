import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Weekday from "./Weekday";

function Calendar({ workouts }) {
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
        <table>
            {/* <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                </tr>

            </thead> */}
            <tbody>
                <tr>
                    <td><Weekday weekday={1} workouts={workouts.filter(m => m.day == 1)} /></td>
                    <td><Weekday weekday={2} workouts={workouts.filter(m => m.day == 2)} /></td>
                    <td><Weekday weekday={3} workouts={workouts.filter(m => m.day == 3)} /></td>
                    <td><Weekday weekday={4} workouts={workouts.filter(m => m.day == 4)} /></td>
                    <td><Weekday weekday={5} workouts={workouts.filter(m => m.day == 5)} /></td>
                    <td><Weekday weekday={6} workouts={workouts.filter(m => m.day == 6)} /></td>
                    <td><Weekday weekday={7} workouts={workouts.filter(m => m.day == 7)} /></td>
                </tr>

            </tbody>
        </table>
    );
}

export default Calendar;