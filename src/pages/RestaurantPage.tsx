import { useState } from 'react';
import { Reveal, ScrollToTop } from '../components';
import { FaUtensils, FaWineGlassAlt, FaCheckCircle, FaTimes, FaCalendarAlt, FaClock, FaUserFriends } from 'react-icons/fa';

export default function RestaurantPage() {
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [tableConfirmed, setTableConfirmed] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [date, setDate] = useState('2026-09-12');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2 Guests');

  const menuItems = [
    {
      category: 'Starters & Seafood',
      items: [
        { name: 'Brittany Blue Lobster Carpaccio', desc: 'Caviar de Sologne, citrus reduction, smoked sea salt', price: '$85' },
        { name: 'Truffle & Duck Foie Gras Terrine', desc: 'Brioche feuilletée, fig chutney, aged balsamic vinegar', price: '$72' },
        { name: 'Wild Mediterranean Sea Bass Crudo', desc: 'Finger lime, extra virgin olive oil, kaffir leaf foam', price: '$68' },
      ],
    },
    { category: 'Main Courses',
      items: [
        { name: 'A5 Wagyu Beef Tenderloin', desc: 'Pomme mousseline, black winter truffle jus, braised shallots', price: '$165' },
        { name: 'Line-Caught Turbot Meunière', desc: 'Morel mushroom emulsion, asparagus spears, saffron fumet', price: '$140' },
        { name: 'Roasted Bresse Pigeon', desc: 'Roasted beetroots, spiced jus, charred foie gras brioche', price: '$135' },
      ],
    },
    {
      category: 'Grand Desserts',
      items: [
        { name: 'Guayaquil Dark Chocolate Soufflé', desc: 'Madagascar bourbon vanilla bean ice cream, gold leaf', price: '$42' },
        { name: 'Deconstructed Meyer Lemon Tart', desc: 'Italian meringue, basil gelée, candied citrus peel', price: '$38' },
      ],
    },
  ];

  const handleTableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTableConfirmed(true);
  };

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[480px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Michelin-Starred Gastronomy
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md mb-4">
            L'Orangerie Fine Dining
          </h1>
          <button
            onClick={() => setTableModalOpen(true)}
            className="btn btn-primary btn-lg uppercase text-xs tracking-[3px] font-tertiary shadow-xl hover:bg-accent-hover cursor-pointer"
          >
            Reserve Your Table
          </button>
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-20 px-4 lg:px-0">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <Reveal variant="fade-right" duration={1000}>
            <div className="flex items-center gap-x-2 text-accent font-tertiary uppercase text-xs tracking-[4px] mb-2 font-semibold">
              <FaUtensils />
              <span>Culinary Excellence</span>
            </div>
            <h2 className="h2 font-primary text-primary mb-6">Where Culinary Art Meets Coastal Elegance</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-base">
              Supervised by Master Executive Chef Julien Vaneau, L'Orangerie offers an ethereal journey across Mediterranean flavors. Each dish is crafted with hyper-seasonal produce harvested daily from our organic private gardens and local artisanal sea beds.
            </p>
            <div className="p-6 bg-accent/10 border-l-4 border-accent rounded-r-sm mb-6">
              <p className="italic font-primary text-lg text-primary">
                "Gastronomy is not merely food; it is an unforgettable emotional soundscape of scent, texture, and light."
              </p>
              <p className="text-xs uppercase font-tertiary tracking-[2px] text-accent mt-2 font-semibold">
                — Chef Julien Vaneau, 3 Michelin Stars
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade-left" duration={1000} className="rounded-sm overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
              alt="Restaurant Dining Experience"
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
        </div>

        {/* Menu Showcase */}
        <Reveal variant="fade-up" duration={1000} className="text-center mb-16">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Seasonal Tasting Menu
          </p>
          <h2 className="font-primary text-4xl text-primary mb-4">Chef’s Signature Selections</h2>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {menuItems.map((cat, idx) => (
            <Reveal
              key={cat.category}
              variant="fade-up"
              duration={900}
              delay={idx * 150}
              className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 shadow-sm"
            >
              <div className="flex items-center gap-x-2 text-accent text-lg mb-4">
                <FaWineGlassAlt />
                <h3 className="font-primary text-2xl text-primary">{cat.category}</h3>
              </div>
              <div className="space-y-6">
                {cat.items.map((dish) => (
                  <div key={dish.name} className="border-b border-neutral-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-primary font-semibold text-gray-800 text-lg">{dish.name}</h4>
                      <span className="font-primary text-accent font-bold text-lg">{dish.price}</span>
                    </div>
                    <p className="text-xs text-gray-600 italic leading-relaxed">{dish.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Table Reservation Modal */}
      {tableModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-white max-w-md w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200 relative">
            <button
              onClick={() => {
                setTableModalOpen(false);
                setTableConfirmed(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors p-2 text-xl"
            >
              <FaTimes />
            </button>

            {tableConfirmed ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mx-auto mb-4 text-3xl">
                  <FaCheckCircle />
                </div>
                <h3 className="font-primary text-2xl text-primary mb-2">Table Reserved</h3>
                <p className="text-sm text-gray-600 mb-6">
                  We look forward to hosting {guestName || 'you'} at L'Orangerie on <span className="font-semibold text-primary">{date}</span> at <span className="font-semibold text-primary">{time}</span> for <span className="font-semibold text-primary">{guests}</span>.
                </p>
                <button
                  onClick={() => {
                    setTableModalOpen(false);
                    setTableConfirmed(false);
                  }}
                  className="btn btn-primary btn-lg w-full uppercase text-xs tracking-[2px]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleTableSubmit} className="p-8 space-y-4">
                <h3 className="font-primary text-2xl text-primary mb-4 border-b pb-2">Table Reservation</h3>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Guest Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Madame Dupont"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">
                      <FaCalendarAlt className="inline mr-1 text-accent" /> Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full h-11 px-3 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">
                      <FaClock className="inline mr-1 text-accent" /> Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full h-11 px-3 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">
                    <FaUserFriends className="inline mr-1 text-accent" /> Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-11 px-3 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full uppercase text-xs tracking-[2px] mt-4"
                >
                  Confirm Table Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
