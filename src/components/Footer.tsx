import { Link } from "react-router-dom";
import logoWhite from "../assets/img/logo-white.svg";
import Reveal from "./Reveal";

/**
 * Site footer: dark background (bg-primary), logo link to home, quick nav links, dynamic year in copyright.
 */
export default function Footer() {
  const footerLinks = [
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Gastronomy', path: '/restaurant' },
    { name: 'Wellness Spa', path: '/spa' },
    { name: 'About Adina', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'My Bookings', path: '/my-bookings' },
  ];

  return (
    <footer className="bg-primary pt-16 pb-12 border-t border-white/10 text-white">
      <div className="container mx-auto max-w-7xl px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-y-8">
        <Reveal variant="fade-up" duration={900} delay={100} className="flex flex-col items-center md:items-start">
          <Link to="/" aria-label="Home">
            <img src={logoWhite} alt="Hotel Logo" className="w-[160px] h-auto block mb-3" />
          </Link>
          <p className="text-xs text-gray-400 font-tertiary tracking-[1px]">
            Boulevard du Cap, 06600 Antibes • French Riviera
          </p>
        </Reveal>

        <Reveal variant="fade-up" duration={900} delay={200}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-tertiary uppercase text-xs tracking-[2px]">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade-up" duration={900} delay={300}>
          <p className="font-tertiary tracking-[2px] text-xs text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Hotel & Spa Adina. All Rights Reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}



