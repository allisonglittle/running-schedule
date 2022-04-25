import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useState } from 'react';

function NewFeatures() {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant="primary">
          <Alert.Heading>New Features</Alert.Heading>
          <p>
            Click <button disabled={true}>+</button> by a day name to add a workout to the schedule.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
}

export default NewFeatures;