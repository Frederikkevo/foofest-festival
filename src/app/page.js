"use client";

import { useEffect, useState } from "react";
import { getBands, getSchedule } from "../../api/apiClient";

export default function Home() {
  const [bands, setBands] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bandsData = await getBands();
      const scheduleData = await getSchedule();
      setBands(bandsData);
      setSchedule(scheduleData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-orange-500 my-6">
        Foofest Festival Schedule
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Bands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bands.map((band) => (
            <div
              key={band.id}
              className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition"
            >
              <img
                src={
                  band.logo.startsWith("https://")
                    ? band.logo
                    : `/logos/${band.logo}`
                }
                alt={band.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-2">{band.name}</h3>
              {band.logoCredits && (
                <p className="text-sm text-gray-500">
                  Photo by: {band.logoCredits}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Schedule</h2>
        {schedule.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 rounded mb-4 shadow-md flex justify-between"
          >
            <div>
              <p className="text-lg font-bold">{event.band}</p>
              <p className="text-gray-600">
                Stage: {event.stage} | Time: {event.start} - {event.end}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
