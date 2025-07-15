"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push("/booking");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <div className="max-w-lg w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold">🌿 Park Event Booking</h1>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">About the Park</h2>
          <p>
            Our park is available for birthdays, weddings, and community events.
            Enjoy a clean, minimalist outdoor space to make your event memorable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Email: parkbooking@example.com</p>
          <p>Phone: +60 12-345 6789</p>
        </section>

        <button
          onClick={handleBookingClick}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Book Now
        </button>
      </div>
    </main>
  );
}
