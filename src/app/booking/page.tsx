"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    // Add your submit logic here (Supabase, Email, Google Sheets)
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="max-w-lg w-full p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Book Your Event</h1>
        {submitted ? (
          <p className="text-green-600 text-center">Thank you! Your booking has been submitted.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="date"
              type="date"
              placeholder="Preferred Date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <Input
    name="time"
    type="time"
    placeholder="Preferred Time"
    value={formData.time}
    onChange={handleChange}
    required
/>

            <Textarea
              name="message"
              placeholder="Additional Notes"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">
              Submit Booking
            </Button>
          </form>
        )}
      </Card>
    </main>
  );
}

