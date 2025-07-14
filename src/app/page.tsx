"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, name, email, details });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">🌿 Park Event Booking</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">About the Park</h2>
          <p>
            Our park is available for birthdays, weddings, and community events.
            Enjoy a clean, minimalist outdoor space to make your event memorable.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Email: parkbooking@example.com</p>
          <p>Phone: +60 12-345 6789</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Book Your Event</h2>
          <form onSubmit={handleSubmit} className="space-y-2 flex flex-col">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded p-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded p-2"
              required
            />
            <textarea
              placeholder="Event Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="border rounded p-2"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded p-2 hover:bg-green-700 transition"
            >
              Book Now
            </button>
          </form>
          {submitted && (
            <p className="text-green-600">Your booking request has been submitted!</p>
          )}
        </section>
      </div>
    </main>
  );
}
