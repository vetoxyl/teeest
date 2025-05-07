import React, { useState } from "react";
import CalendarView from "./CalendarView";
import DayView from "./DayView";

const CalendarPage = () => {
  const [currentPage, setCurrentPage] = useState("calendar");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    if (date === null) {
      setCurrentPage("calendar");
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
      setCurrentPage("day");
    }
  };

  return (
    <>
      {currentPage === "calendar" && (
        <CalendarView onSelectDate={handleDateChange} />
      )}
      {currentPage === "day" && selectedDate && (
        <DayView date={selectedDate} goBack={handleDateChange} />
      )}
    </>
  );
};

export default CalendarPage;