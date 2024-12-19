"use client";

import React, { useEffect, useState } from 'react';

export default function Lineup() {
  const [bands, setBands] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hill-mirror-era.glitch.me/bands')
      .then((res) => res.json())
      .then((data) => {
        setBands(data);
        setLoading(false);
      })
  }, []);
  bands && console.log(bands)

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-secondary text-4xl font-bold mb-6">Lineup</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bands && bands.map((band) => (
            <div key={band.id} className="border p-4 rounded shadow-lg">
              <img
                src={band.image}
                alt={band.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-bold">{band.name}</h2>
              <p className="text-gray-700">{band.genre}</p>
            </div>
          ))}
        </div>
        <Image
        className="band.logo"
        src={
          band.logo.includes("https") ? band.logo : '/img/${band.logo}'
        }
        width={250}
        height={350}
        alt={band.logo}
        />
  
    </main>
  );
}
