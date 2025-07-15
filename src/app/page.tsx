"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.agoda.com/wp-content/uploads/2024/07/Gelora-Park-Kuantan-Malaysia.jpg)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/70 backdrop-blur-md rounded-xl p-8 max-w-2xl w-full space-y-6"
      >
        {/* Replace the src below with your logo if you have */}
        <img
          src="mbklogo.png"
          alt="Park Logo"
          className="mx-auto rounded-full shadow-md"
          width={100}
          height={100}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Welcome to Le-Park Kuantan
        </h1>
        <p className="text-lg md:text-xl text-green-700">
          Book your event in a clean, peaceful space.
        </p>
        <Link href="/booking">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
            Book Now
          </button>
        </Link>
      </motion.div>
    </main>
  );
}

