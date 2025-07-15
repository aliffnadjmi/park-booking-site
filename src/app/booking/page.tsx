"use client";
import React from "react";

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">🌿 Book Your Event</h1>
        <p className="text-center">Use the form below to book your event at our park.</p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSduy5cbE97FmIBMrwUpwZt6i-bRGGKKesiTTD1raPZOY1XYTg/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded border"
          title="Park Booking Form"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}


