"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginBox = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between items-center relative z-50">
      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/lineup">Lineup</Link>
        <Link href="/tickets">Tickets</Link>
      </div>

      {/* Login Toggle */}
      <div className="relative">
        <button
          onClick={toggleLoginBox}
          className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-gray-100"
        >
          Log In
        </button>

        {showLogin && (
          <div
            className="absolute right-0 top-12 bg-white text-gray-800 shadow-lg rounded p-4 w-64 z-50"
          >
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
