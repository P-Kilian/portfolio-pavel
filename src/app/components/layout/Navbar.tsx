"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black shadow-lg top-0 text-white"
          : "bg-transparent p-5 text-black"
      }`}
    >
      <nav className="flex items-center justify-between px-24 py-4">
        <h1
          className={`font-bold transition-[transform,font-size] duration-300 ease-in-out ${
            isScrolled ? "text-xl translate-y-0" : "text-6xl translate-y-3"
          }`}
        >
          PK.
        </h1>
        <ul className="flex gap-6">
          <li>
            <button
              onClick={() => scrollToElement("home")}
              className="hover:text-gray-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToElement("about")}
              className="hover:text-gray-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToElement("contact")}
              className="hover:text-gray-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
