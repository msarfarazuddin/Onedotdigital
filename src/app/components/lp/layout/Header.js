"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'whatwedo', name: 'What We Do' },
    { id: 'affordable', name: 'Packages' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4">
      <nav className="mx-auto w-full lg:px-10 md:px-10 px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-dark.png"
              alt="onedotdigital"
              width={150}
              height={42}
              priority
            />
          </Link>
        </div>

        {/* Right: Phone Number with Icon */}
        <div className="hover:text-secondary">
          <a
            href="tel:+92 327 363 0329"
            className="text-primary hover:text-secondary text-xl font-semibold flex items-center gap-2"
          >
            <FiPhone size={20} />
            <span className="hidden sm:inline">+92 327 363 0329</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
