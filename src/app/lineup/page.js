"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Lineup() {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hill-mirror-era.glitch.me/bands")
      .then((res) => res.json())
      .then((data) => {
        setBands(data);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to fetch bands:", error));
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-secondary text-4xl font-bold mb-6 text-center">Lineup</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bands.map((band, index) => (
          <div key={band.id || index} className="border p-4 rounded-lg shadow-lg bg-white">
            {/* Image */}
            {band.image && (
              <img
                src={band.image}
                alt={band.name}
                className="w-full h-48 object-cover mb-4 rounded"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}

            {/* Band Name */}
            <h2 className="text-2xl font-bold">{band.name}</h2>
            <p className="text-gray-700">{band.genre}</p>

            {/* Logo and Credits */}
            {band.logo && (
              <div>
                <Image
                  src={
                    band.logo.startsWith("https")
                      ? band.logo
                      : `https://hill-mirror-era.glitch.me/logos/${band.logo}`
                  }
                  width={250}
                  height={350}
                  alt={`${band.name} logo`}
                  unoptimized={true}
                  className="my-2"
                />
                {band.logoCredits && (
                  <p className="text-xs text-gray-500 mt-2">{band.logoCredits}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
