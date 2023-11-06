import React, { useReducer } from "react";

import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  // since api is not getting loaded/run in browser
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const updateTimes = (date) => {
    // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const availableTimes = fetchAPI(new Date());
    console.log("fetchapi -update times: ", availableTimes);
    return availableTimes;
  };

  const initializeTimes = () => {
    // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const availableTimes = fetchAPI(new Date());
    console.log("fetchapi initialize - times: ", availableTimes);
    return availableTimes;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(action.payload);
      default:
        return state;
    }
  };
  //   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
