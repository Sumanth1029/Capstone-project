//@ts-check
import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { submitAPI } from "./API";
import AvailableTimes from "./AvailableTimes";
import BookingConfirmed from "./BookingConfirmed";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const [guestNum, setguestNum] = useState("");
  const [occasion, setoccasion] = useState("");
  const [validated, setValidated] = useState(false);
  const navigateto = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    // event.preventDefault();
    let newSlot = [
      ...props.slots,
      {
        Date: date,
        Time: time,
        "Number of guests": guestNum,
        Occasion: occasion,
      },
    ];

    props.setslots(newSlot);

    let navigate = await submitAPI(form);

    if (navigate) {
      navigateto("/bookingConfirmed");
    }
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <h1 className="formtitle">
          Reserve a table by providing the following details
        </h1>
        <Form
          className="myform"
          validated={validated}
          onSubmit={(event) => handleSubmit(event)}
        >
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Select a date </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the date"
              onChange={(e) => setdate(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a date.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Enter the date in dd-mm-yyyy format
            </Form.Text>
          </Form.Group>

          <AvailableTimes settime={settime} />
          <Form.Group className="mb-3" controlId="guests">
            <Form.Label>Enter the number of guests</Form.Label>
            <Form.Control
              type="number"
              min={1}
              max={10}
              placeholder="Enter a number between 1 and 10"
              onChange={(e) => setguestNum(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="occasion">
            <Form.Label>Enter the Ocasion of visit</Form.Label>
            <Form.Select
              aria-label="Enter the occasion"
              onChange={(e) => setoccasion(e.target.value)}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Submit Reservation</Button>
        </Form>
      </Container>
    </>
  );
}

export default BookingForm;
