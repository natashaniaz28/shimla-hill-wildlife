"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/wildlife", label: "Wildlife" },
    { href: "/conservation", label: "Conservation" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + Department Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/kp-wildlife-logo.png"
            alt="KP Wildlife Department Logo"
            width={50}
            height={50}
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-medium">Wildlife Department</p>
            <p className="text-xs text-green-200">Khyber Pakhtunkhwa</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
  <XMarkIcon className="h-6 w-6" />
) : (
  <Bars3Icon className="h-6 w-6" />
)}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-800 text-white">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-green-300"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
