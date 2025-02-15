import React from "react";

const sessions = [
  { date: "Saturday, March 15, 2025", time: "10:00 AM - 1:00 PM" },
  { date: "Sunday, March 16, 2025", time: "2:00 PM - 5:00 PM" },
];

const UpcomingSessions = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <h3 className="mb-4 text-xl font-bold">Upcoming Sessions</h3>
      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 mb-4 rounded-lg border border border-solid max-sm:flex-col max-sm:gap-4 max-sm:text-center"
        >
          <div>
            <p className="mb-2.5 font-semibold">{session.date}</p>
            <p>{session.time}</p>
          </div>
          <button className="px-4 py-2.5 text-black bg-orange-500 rounded-lg cursor-pointer border-[none] max-sm:w-full">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSessions;
