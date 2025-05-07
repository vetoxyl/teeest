import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Handle day click
  const handleSelectSlot = (slotInfo) => {
    const selectedDate = moment(slotInfo.start).format("YYYY-MM-DD");
    onSelectDate(selectedDate);
  };

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) =>
      moment(prevDate).add(direction, "month").toDate()
    );
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      changeMonth(1);
    } else {
      changeMonth(-1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      changeMonth(1);
    } else if (event.key === "ArrowLeft") {
      changeMonth(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto", textAlign: "center",fontFamily:"sans-serif"}}>
      {/* Header */}
      <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>
        {moment(currentDate).format("MMMM YYYY")}
      </h2>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <button onClick={() => setCurrentDate(new Date())}>Today</button>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>

      {/* Calendar Component */}
      <Calendar
        localizer={localizer}
        date={currentDate}
        view="month"
        events={[]}
        style={{ height: "500px" }}
        onNavigate={(date) => setCurrentDate(date)}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default CalendarView;
