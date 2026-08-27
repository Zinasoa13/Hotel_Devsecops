import { useState } from 'react';
import { useRoomContext } from '../context/RoomContext';
import { Reveal, ScrollToTop } from '../components';
import { Link } from 'react-router-dom';
import { BsPeople, BsArrowsFullscreen, BsSearch } from 'react-icons/bs';

export default function RoomsPage() {
  const { rooms, openBookingModalForRoom } = useRoomContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Suite', 'Room', 'Villa'];

  const filteredRooms = rooms
    .filter((room) => {
      const matchesCategory = activeCategory === 'All' || room.name.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) || room.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'size') return b.size - a.size;
      return 0;
    });

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[420px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Unrivaled Accommodations
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md">
            Rooms & Sanctuary Catalog
          </h1>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-4" />
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-16 px-4 lg:px-0">
        {/* Filter & Search Bar */}
        <Reveal variant="fade-up" duration={900} className="mb-12 bg-white p-6 rounded-sm shadow-lg border border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-xs font-tertiary uppercase tracking-[2px] transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent text-white font-semibold shadow-md'
                    : 'bg-neutral-100 text-gray-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 text-xs font-medium text-gray-800 border border-neutral-200 rounded-sm outline-none focus:border-accent"
              />
              <BsSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto h-10 px-4 text-xs font-medium text-gray-700 bg-neutral-100 border border-neutral-200 rounded-sm outline-none cursor-pointer"
            >
              <option value="default">Sort By: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="size">Size: Largest First</option>
            </select>
          </div>
        </Reveal>

        {/* Room Grid */}
        {filteredRooms.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 rounded-sm border border-neutral-200">
            <p className="font-primary text-2xl text-gray-500 mb-2">No sanctuaries match your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-sm btn-primary inline-flex uppercase tracking-[2px] font-tertiary text-xs mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, idx) => (
              <Reveal
                key={room.id}
                variant="fade-up"
                duration={900}
                delay={idx * 80}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between group border border-neutral-100"
              >
                <div>
                  <div className="overflow-hidden relative h-[280px]">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-primary/90 text-white font-primary font-bold text-lg px-3 py-1 rounded-sm shadow-md">
                      ${room.price} <span className="text-xs font-normal text-gray-300">/ night</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-primary text-2xl text-primary mb-2 group-hover:text-accent transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-6 line-clamp-3">
                      {room.description}
                    </p>

                    <div className="flex items-center gap-x-6 text-gray-700 text-xs font-medium border-t border-neutral-100 pt-4">
                      <div className="flex items-center gap-x-2">
                        <BsPeople className="text-accent text-sm" />
                        <span>Max {room.maxPerson} Persons</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BsArrowsFullscreen className="text-accent text-sm" />
                        <span>{room.size} m²</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    to={`/room/${room.id}`}
                    className="btn btn-sm btn-secondary uppercase text-[11px] tracking-[2px] font-tertiary flex-1"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => openBookingModalForRoom(room)}
                    className="btn btn-sm btn-primary uppercase text-[11px] tracking-[2px] font-tertiary flex-1 cursor-pointer shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
