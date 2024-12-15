"use client";

import React, { useEffect, useState } from 'react';

export default function Lineup() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hill-mirror-era.glitch.me/artists')
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching artists:", error));
  }, []);

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-secondary text-4xl font-bold mb-6">Lineup</h1>
      {loading ? (
        <p>Loading artists...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="border p-4 rounded shadow-lg">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-bold">{artist.name}</h2>
              <p className="text-gray-700">{artist.genre}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
