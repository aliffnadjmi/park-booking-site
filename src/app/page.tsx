"use client";

import React, { useState } from "react";

export default function Home() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <p>Phon
