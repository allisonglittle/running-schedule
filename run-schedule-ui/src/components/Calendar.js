import React from "react";
import Weekday from "./Weekday";

function Calendar({ workouts, onDelete, loadWorkouts }) {
    return (
        <table className="Calendar-table">
            <tbody>
                <tr>
                    <td className="Calendar-day"><Weekday weekday={1} workouts={workouts.filter(m => m.day === 1)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={2} workouts={workouts.filter(m => m.day === 2)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={3} workouts={workouts.filter(m => m.day === 3)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={4} workouts={workouts.filter(m => m.day === 4)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={5} workouts={workouts.filter(m => m.day === 5)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={6} workouts={workouts.filter(m => m.day === 6)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                    <td className="Calendar-day"><Weekday weekday={7} workouts={workouts.filter(m => m.day === 7)} onDelete={onDelete} loadWorkouts={loadWorkouts}/></td>
                </tr>

            </tbody>
        </table>
    );
}

export default Calendar;