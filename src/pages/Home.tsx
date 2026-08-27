import { BookForm, HeroSlider, Reveal, Rooms, ScrollToTop } from '../components';
import { Link } from 'react-router-dom';
import { FaUtensils, FaSpa, FaStar, FaQuoteLeft } from 'react-icons/fa';

/**
 * Home page: HeroSlider carousel, BookForm search bar, Rooms catalog grid,
 * Michelin Restaurant & Spa Experience teasers, and Guest Testimonials.
 */
export default function Home() {
  const reviews = [
    {
      name: 'Duchess Charlotte of Essex',
      text: 'An unprecedented retreat of serenity and refinement. The private butler service and Michelin dining exceeded every expectation.',
      rating: 5,
      role: 'Verified Guest • Presidential Suite',
    },
    {
      name: 'Monsieur Henri de Saint-Germain',
      text: 'From the private ocean terrace to the Himalayan spa hydrotherapy, Hotel Adina defines modern high hospitality.',
      rating: 5,
      role: 'Verified Guest • Signature Villa',
    },
  ];

  return (
    <div>
      <ScrollToTop />
      <HeroSlider />

      {/* Floating Book Form Search Bar */}
      <div className="container mx-auto max-w-7xl relative px-4 lg:px-0">
        <Reveal variant="fade-up" duration={1000} delay={200} className="w-full">
          <div className="bg-white/95 backdrop-blur-md mt-4 p-2 lg:p-0 lg:absolute lg:left-0 lg:right-0 lg:-top-12 lg:z-30 shadow-2xl rounded-sm border border-neutral-200/80 transition-all duration-500 hover:shadow-3xl">
            <BookForm />
          </div>
        </Reveal>
      </div>

      {/* Featured Rooms Section */}
      <Rooms />

      {/* Luxury Experiences Teaser Section */}
      <section className="bg-neutral-50 py-24 border-t border-b border-neutral-200">
        <div className="container mx-auto max-w-7xl px-4 lg:px-0">
          <Reveal variant="fade-up" duration={1000} className="text-center mb-16">
            <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
              Curated Privileges
            </p>
            <h2 className="font-primary text-4xl md:text-5xl text-primary mb-4">World-Class Experiences</h2>
            <div className="w-20 h-[2px] bg-accent mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gastronomy Teaser Card */}
            <Reveal variant="fade-right" duration={1000} className="bg-white rounded-sm shadow-xl overflow-hidden flex flex-col md:flex-row group border border-neutral-100">
              <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop"
                  alt="Fine Dining Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-x-2 text-accent text-xs font-tertiary uppercase tracking-[2px] mb-2 font-semibold">
                    <FaUtensils />
                    <span>3 Michelin Stars</span>
                  </div>
                  <h3 className="font-primary text-2xl text-primary mb-3">L'Orangerie Fine Dining</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Savor Mediterranean gastronomy crafted daily with organic harvests from our estate gardens and rare sommelier vintages.
                  </p>
                </div>
                <Link
                  to="/restaurant"
                  className="btn btn-sm btn-primary uppercase text-[11px] tracking-[2px] font-tertiary inline-flex self-start"
                >
                  Explore Gastronomy
                </Link>
              </div>
            </Reveal>

            {/* Spa Teaser Card */}
            <Reveal variant="fade-left" duration={1000} className="bg-white rounded-sm shadow-xl overflow-hidden flex flex-col md:flex-row group border border-neutral-100">
              <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                  alt="Spa Hydrotherapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-x-2 text-accent text-xs font-tertiary uppercase tracking-[2px] mb-2 font-semibold">
                    <FaSpa />
                    <span>Holistic Oasis</span>
                  </div>
                  <h3 className="font-primary text-2xl text-primary mb-3">Anantara Wellness Spa</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    Immerse yourself in heated Himalayan salt baths, eucalyptus grottos, and rare Moroccan argan massage rituals.
                  </p>
                </div>
                <Link
                  to="/spa"
                  className="btn btn-sm btn-primary uppercase text-[11px] tracking-[2px] font-tertiary inline-flex self-start"
                >
                  Book Wellness Treatment
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <Reveal variant="fade-up" duration={1000} className="mb-16">
            <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
              Distinguished Praises
            </p>
            <h2 className="font-primary text-4xl text-primary mb-4">Guest Testimonials</h2>
            <div className="w-20 h-[2px] bg-accent mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
              <Reveal
                key={rev.name}
                variant="fade-up"
                duration={900}
                delay={idx * 150}
                className="p-8 bg-neutral-50 rounded-sm border border-neutral-200 text-left relative"
              >
                <FaQuoteLeft className="text-accent/20 text-4xl absolute top-6 right-6" />
                <div className="flex text-amber-500 gap-x-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="font-primary italic text-gray-800 text-lg mb-6 leading-relaxed">
                  "{rev.text}"
                </p>
                <div>
                  <h4 className="font-primary font-bold text-primary text-base">{rev.name}</h4>
                  <span className="text-xs uppercase font-tertiary tracking-[1px] text-accent">{rev.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



