import Link from "next/link";

export default function Navbar() {
    return (
      <header className="navbar">
        <div>
          <h1>InfoTech</h1>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    );
  }