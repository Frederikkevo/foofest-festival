"use client";

import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/apiClient";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchData("/schedule");

        // Håndter data (objekt eller array)
        if (Array.isArray(data)) {
          setEvents(data);
        } else if (data.schedule && Array.isArray(data.schedule)) {
          setEvents(data.schedule);
        } else {
          throw new Error("Invalid data format.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-primary text-4xl font-bold mb-6">Festival Schedule</h1>
      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-2">{event.act}</h2>
            <p className="text-gray-600">Stage: {event.stage}</p>
            <p className="text-gray-600">Time: {event.time}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
