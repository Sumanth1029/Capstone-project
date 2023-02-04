import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./Content/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(
    "Reserve a table by providing the following details"
  );
  expect(headingElement).toBeInTheDocument();
});
