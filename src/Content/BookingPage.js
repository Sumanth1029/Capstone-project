import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";

function BookingPage() {
  const [slots, setslots] = useState([]);

  useEffect(() => {
    console.log(slots);
  }, [slots]);
  const props = { slots, setslots };

  return (
    <>
      <Header />
      <BookingForm setslots={setslots} slots={slots}/>
    </>
  );
}

export default BookingPage;
