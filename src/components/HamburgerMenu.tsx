'use client'

import { useState } from 'react';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';

export default function HamburgerMenu({ settings }: { settings: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!settings) return <p>Loading...</p>;

  return (
    <nav className="relative flex justify-between items-center">
      <button
        className="lg:hidden flex items-center text-slate-900 p-3"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation for larger screens */}
      <nav>
        <ul className="hidden lg:flex space-x-2 md:space-x-0 flex-wrap md:flex-nowrap">
            {settings.data.navigation.map(({label,link}:{label:any, link:any}) => (
                <li key={label}>
                    <PrismicNextLink field={link}
                    className="p-3 font-body text-slate-900">{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
      </nav>  

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 z-20 lg:hidden transform -translate-x">
            <ul className="flex flex-col items-center p-4 bg-white shadow-md">
            {settings.data.navigation.map(({ label, link }:{label:any, link:any}) => (
                <li key={label} className="w-full text-center">
                    <button onClick={() => setIsMenuOpen(false)} className="w-full text-left">
                        <PrismicNextLink field={link} className="block p-3 font-body text-slate-900">
                            {label}
                        </PrismicNextLink>
                    </button>
                </li>
            ))}
            </ul>
        </div>
        )}
    </nav>
  );
}
