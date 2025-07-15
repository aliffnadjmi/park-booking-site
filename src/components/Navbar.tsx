import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/mbklogo.png" alt="Park Booking Logo" width={40} height={40} />
        <span className="font-semibold text-lg">Park Booking</span>
      </Link>
      {/* Add your nav links here */}
    </nav>
  );
}

