import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

function AvailableTimes({ settime }) {
  const [timeSlot] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  // settime("17:00");
  return (
    <Form.Group className="mb-3" controlId="time">
      <Form.Label>Select a time</Form.Label>
      <Form.Select
        aria-label="Enter the occasion"
        onChange={(e) => settime(e.target.value)}
        required
      >
        <option disabled selected value={""}>
          Select
        </option>
        {timeSlot.map((times) => {
          return (
            <option key={times} value={times}>
              {times}
            </option>
          );
        })}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please choose a valid time.
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default AvailableTimes;
