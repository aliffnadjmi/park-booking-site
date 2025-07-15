"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-green-600 text-white p-4 shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          🌿 Le-Park Kuantan
        </Link>
        <Link
          href="/booking"
          className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 transition"
        >
          Booking
        </Link>
      </div>
    </nav>
  );
}
