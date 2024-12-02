"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-xl font-bold text-white">PK.</h1>
        <ul className="flex gap-6 text-white">
          <li>
            <Link href="#home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
