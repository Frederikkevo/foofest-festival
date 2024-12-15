
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/lineup">Lineup</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
