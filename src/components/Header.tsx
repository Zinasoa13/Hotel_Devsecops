import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../assets/img/logo-white.svg';
import logoDark from '../assets/img/logo-dark.svg';
import Reveal from './Reveal';

/**
 * Fixed header with logo and navigation.
 * All links navigate to exact React Router routes (/rooms, /restaurant, /spa, /contact, /my-bookings).
 * Includes Bookings count badge and direct Book Now CTA modal launcher.
 */
export default function Header() {
  const { resetRoomFilterData, bookings, openBookingModalForRoom } = useRoomContext();
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setHeader(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Spa', path: '/spa' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed z-50 w-full min-h-[72px] transition-all duration-500 px-4 lg:px-8
      ${header ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-gradient-to-b from-black/70 to-transparent py-5'}`}
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
        <Reveal variant="fade-down" duration={1000} delay={100}>
          <Link to="/" onClick={resetRoomFilterData} className="block w-[150px] shrink-0" aria-label="Home">
            <img
              src={header ? logoDark : logoWhite}
              alt="Hotel Logo"
              className="w-[150px] h-auto block"
            />
          </Link>
        </Reveal>

        <nav
          className={`${header ? 'text-primary' : 'text-white'}
          flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-7 font-tertiary tracking-[2px] text-[13px] md:text-[14px] uppercase font-medium`}
        >
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Reveal key={item.name} variant="fade-down" duration={900} delay={150 + idx * 60}>
                <Link
                  to={item.path}
                  className={`transition-colors duration-300 hover:text-accent relative py-1 ${
                    isActive ? 'text-accent font-semibold border-b-2 border-accent' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </Reveal>
            );
          })}

          {/* My Bookings link with badge counter */}
          <Reveal variant="fade-down" duration={900} delay={450}>
            <Link
              to="/my-bookings"
              className={`transition-colors duration-300 hover:text-accent relative flex items-center gap-x-1.5 py-1 ${
                location.pathname === '/my-bookings' ? 'text-accent font-semibold border-b-2 border-accent' : ''
              }`}
            >
              <span>Bookings</span>
              {bookings.length > 0 && (
                <span className="bg-accent text-white text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold">
                  {bookings.length}
                </span>
              )}
            </Link>
          </Reveal>

          {/* Header CTA Button */}
          <Reveal variant="fade-down" duration={900} delay={500}>
            <button
              onClick={() => openBookingModalForRoom()}
              className="btn btn-sm btn-primary ml-2 uppercase text-xs tracking-[2px] font-tertiary shadow-md hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </Reveal>
        </nav>
      </div>
    </header>
  );
}



