"use client";

import React from "react";

export default function Home() {
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
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSduy5cbE97FmIBMrwUpwZt6i-bRGGKKesiTTD1raPZOY1XYTg/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"

