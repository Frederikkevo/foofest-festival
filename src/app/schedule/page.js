"use client";

import React, { useEffect, useState } from 'react';

export default function FestivalSchedule() {
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://hill-mirror-era.glitch.me/schedule')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSchedule(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);


  const scenes = ["Vanaheim", "Midgard", "Jotunheim"];

  return (
    <div className="p-5 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Festival Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenes.map(scene => (
          <div key={scene} className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-orange-500">{scene}</h2>
            {Object.entries(schedule[scene] || {}).map(([day, events]) => (
              <div key={day} className="mb-3">
                <h3 className="text-xl font-semibold">{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                {events.map((event, index) => (
                  <p key={index} className="text-gray-700">
                    {event.start} - {event.end}: {event.act}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
