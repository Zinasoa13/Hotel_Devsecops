import { useState, useRef, useEffect } from 'react';
import { useRoomContext } from '../context/RoomContext';
import { BsChevronDown } from 'react-icons/bs';
import { adultsList } from '../data';

/**
 * Dropdown to select number of adults.
 * Uses React useState + click-outside event handler for 100% reliable toggling and closing.
 */
export default function AdultsDropdown() {
  const { adults, setAdults } = useRoomContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="w-full h-full bg-white relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-full flex items-center justify-between px-6 text-gray-700 font-secondary text-sm md:text-base font-medium hover:text-accent transition-colors outline-none border-0 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Select adults count"
      >
        <span>{adults}</span>
        <BsChevronDown className={`text-sm text-accent transition-transform duration-300 ease-out shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul className="bg-white absolute left-0 top-full w-full flex flex-col z-50 border border-neutral-200/80 shadow-2xl rounded-b-sm transition-all duration-200">
          {adultsList.map(({ name }, idx) => (
            <li
              key={idx}
              onClick={() => {
                setAdults(name);
                setIsOpen(false);
              }}
              className="h-11 hover:bg-accent hover:text-white text-gray-700 font-secondary text-sm font-medium w-full flex items-center justify-center cursor-pointer border-b border-neutral-100 last:border-b-0 transition-colors duration-200"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


