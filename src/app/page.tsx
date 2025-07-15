"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Park Booking Site</h1>
        <p className="mb-6">Book your park event easily with us.</p>
        <a
          href="/booking"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}
