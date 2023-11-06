import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByTestId("reserve");
  expect(headingElement).toHaveTextContent("Book Now");
});

test("intialize or updatetimes", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByTestId("reserve");
  fireEvent.click(reserveButton);

  const testTime = [];
  userEvent.selectOptions(
    screen.getByLabelText("Choose Time"),
    screen.getByRole("option", { name: testTime })
  );
  expect(screen.getByRole("option", { name: testTime }).selected).toBe(true);
});
