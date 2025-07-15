"use client";

import React from "react";

export default function Home() {
  return (
    <main>
      <h1>Park Booking Site Working</h1>
      <p>Your deployment should now succeed without syntax errors.</p>
    </main>
  );
}
import Link from "next/link";
<nav className="p-4 bg-green-100 text-center">
  <Link href="/" className="mx-2 text-green-800 font-semibold">Home</Link>
  <Link href="/booking" className="mx-2 text-green-800 font-semibold">Booking</Link>
  {/* You can add About, Contact, Gallery here later */}
</nav>
