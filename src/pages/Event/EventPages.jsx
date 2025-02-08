import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventPages() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({
    "2025-01-31": "uang kas",

    //  tanggal -1 dari hari sekarang
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">📅 Kalender Event</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => {
          const eventText = events[formatDate(date)];
          return eventText ? (
            <p className="text-xs text-red-600 font-bold">{eventText}</p>
          ) : null;
        }}
      />
    </div>
  );
}

export default EventPages;
