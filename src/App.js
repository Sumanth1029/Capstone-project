import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingConfirmed from "./Content/BookingConfirmed";
import BookingPage from "./Content/BookingPage";
import Main from "./Content/Main";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/reservations" element={<BookingPage />} />
          <Route
            exact
            path="/bookingConfirmed"
            element={<BookingConfirmed />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
