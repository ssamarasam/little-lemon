import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Book Now");
});

// test("intialize or updatetimes", () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const reserveButton = screen.getByTestId("reserve");
//   fireEvent.click(reserveButton);

//   const testTime = [];
//   userEvent.selectOptions(
//     screen.getByLabelText("Choose Time"),
//     screen.getByRole("option", { name: testTime })
//   );
//   expect(screen.getByRole("option", { name: testTime }).selected).toBe(true);
// });

// const availableTimes = ["17:00", "17:30"];
// const today = new Date().toISOString().split("T")[0];
// const submitForm = (formData) => {
//   const submit = submitAPI(formData);
//   if (submit) {
//     let allBookings = [...bookings, { id: bookings.length + 1, ...formData }];
//     console.log("bookings: ", allBookings);
//     setBookings(allBookings);
//     navigate("/confirmed");
//   }
// };

// test("Submit the form", () => {
//   render(
//     <BookingForm submitForm={submitForm} availableTimes={availableTimes} />
//   );

//   const submitButton = screen.getByRole("button");
//   fireEvent.click(submitButtom);

//   expect(submitButton).toHaveBeenCalled({
//     date: today,
//     guests: 1,
//     ocassion: "birthday",
//     time: availableTimes[0],
//   });
// });
