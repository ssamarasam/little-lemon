import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberOfGuests: 0,
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", formData);
    submitForm(formData);
  };

  const hanldeInputsChange = (e) => {
    const { name, value } = e.target;
    // let newData = { ...formData, [name]: value };
    // setFormData(newData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
    console.log("after dispatch: ", formData.date);
  };
  console.log("times: ", availableTimes);

  return (
    <main>
      <h2 data-test-id="reserve" className="book-now">
        Book Now
      </h2>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          name="date"
          type="date"
          id="res-date"
          //   value={formData.date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="time"
          id="res-time "
          onChange={hanldeInputsChange}
          required
          //   value={formData.time}
        >
          <option value="">Select Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          name="numberOfGuests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          //   value={formData.numberOfGuests}
          onChange={hanldeInputsChange}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={hanldeInputsChange}
          required
        >
          <option value="" select>
            Select Occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input
          className="submit-button"
          type="submit"
          value="Make Your reservation"
          aria-label="submit button"
        />
      </form>
    </main>
  );
};

export default BookingForm;
