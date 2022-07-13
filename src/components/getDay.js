import React from "react";

const getDay = (props) => {
  let today;
  let tomorrow;
  let nextday;
  switch (props) {
    case 0: {
      today = "Pazar";
      tomorrow = "Pazartesi";
      nextday = "Salı";
      break;
    }
    case 1: {
      today = "Pazartesi";
      tomorrow = "Salı";
      nextday = "Çarşamba";
      break;
    }
    case 2: {
      today = "Salı";
      tomorrow = "Çarşamba";
      nextday = "Perşembe";
      break;
    }
    case 3: {
      today = "Çarşamba";
      tomorrow = "Perşembe";
      nextday = "Cuma";
      break;
    }
    case 4: {
      today = "Perşembe";
      tomorrow = "Cuma";
      nextday = "Cumartesi";
      break;
    }
    case 5: {
      today = "Cuma";
      tomorrow = "Cumartesi";
      nextday = "Pazar";
      break;
    }
    case 6: {
      today = "Cumartesi";
      tomorrow = "Pazar";
      nextday = "Pazartesi";
      break;
    }
    default: {
      break;
    }
  }
  return { today, tomorrow, nextday };
};

export default getDay;
