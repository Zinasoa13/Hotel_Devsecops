import { useRoomContext } from '../context/RoomContext';
import { Reveal, ScrollToTop } from '../components';
import { FaAward, FaHistory, FaGem, FaGlassCheers } from 'react-icons/fa';

export default function AboutPage() {
  const { openBookingModalForRoom } = useRoomContext();

  const stats = [
    { number: '1888', label: 'Year Established' },
    { number: '48', label: 'Private Suites & Villas' },
    { number: '3', label: 'Michelin Culinary Stars' },
    { number: '99%', label: 'Guest Satisfaction' },
  ];

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[480px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Legacy of French Riviera Excellence
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md mb-4">
            Our Story & Heritage
          </h1>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-20 px-4 lg:px-0">
        {/* Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <Reveal variant="fade-right" duration={1000}>
            <p className="font-tertiary uppercase text-xs tracking-[4px] text-accent font-semibold mb-2">
              A Century of Luxury
            </p>
            <h2 className="h2 font-primary text-primary mb-6">
              An Iconic Coastal Sanctuary Designed for Discerning Travelers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-base">
              Perched atop the golden cliffs of Antibes overlooking the azure Mediterranean, Hotel & Spa Adina was founded in 1888 as an aristocratic retreat for European royalty and literary luminaries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Every archway, handcrafted teak terrace, and marble salon reflects a timeless devotion to understated elegance, privacy, and impeccable personal butler service.
            </p>
            <button
              onClick={() => openBookingModalForRoom()}
              className="btn btn-primary btn-lg uppercase text-xs tracking-[3px] font-tertiary shadow-xl hover:bg-accent-hover cursor-pointer"
            >
              Experience Adina Today
            </button>
          </Reveal>

          <Reveal variant="fade-left" duration={1000} className="relative rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
              alt="Hotel Heritage Exterior"
              className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
        </div>

        {/* Key Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((item, idx) => (
            <Reveal
              key={item.label}
              variant="fade-up"
              duration={900}
              delay={idx * 100}
              className="p-8 bg-neutral-50 rounded-sm border border-neutral-200 text-center shadow-sm"
            >
              <span className="font-primary text-4xl lg:text-5xl text-accent font-bold block mb-2">
                {item.number}
              </span>
              <span className="text-xs uppercase font-tertiary tracking-[2px] text-gray-600 font-medium">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Pillars / Values Grid */}
        <Reveal variant="fade-up" duration={1000} className="text-center mb-16">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Uncompromising Standards
          </p>
          <h2 className="font-primary text-4xl text-primary mb-4">The Pillars of Adina Hospitality</h2>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <Reveal variant="fade-up" duration={900} delay={100} className="p-6 bg-white rounded-sm border border-neutral-200 shadow-md">
            <div className="text-accent text-3xl mb-4">
              <FaGem />
            </div>
            <h3 className="font-primary text-xl text-primary font-semibold mb-2">Absolute Privacy</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Discreet private entrances, subterranean helipad access, and acoustic soundproofing guarantee serene solitude.
            </p>
          </Reveal>

          <Reveal variant="fade-up" duration={900} delay={200} className="p-6 bg-white rounded-sm border border-neutral-200 shadow-md">
            <div className="text-accent text-3xl mb-4">
              <FaGlassCheers />
            </div>
            <h3 className="font-primary text-xl text-primary font-semibold mb-2">Bespoke Concierge</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dedicated 24/7 personal butler service tailored around your rhythm, preferences, and private requests.
            </p>
          </Reveal>

          <Reveal variant="fade-up" duration={900} delay={300} className="p-6 bg-white rounded-sm border border-neutral-200 shadow-md">
            <div className="text-accent text-3xl mb-4">
              <FaHistory />
            </div>
            <h3 className="font-primary text-xl text-primary font-semibold mb-2">Rich Riviera History</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              A heritage estate preserved with museum-grade care, offering curated art tours and historical wine cellars.
            </p>
          </Reveal>

          <Reveal variant="fade-up" duration={900} delay={400} className="p-6 bg-white rounded-sm border border-neutral-200 shadow-md">
            <div className="text-accent text-3xl mb-4">
              <FaAward />
            </div>
            <h3 className="font-primary text-xl text-primary font-semibold mb-2">Global Acclaim</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Consistently ranked among the top 5 luxury resorts worldwide by Condé Nast Traveler and Michelin Guide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
