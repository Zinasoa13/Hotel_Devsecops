import { useState } from 'react';
import { Reveal, ScrollToTop } from '../components';
import { FaSpa, FaCheckCircle, FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function SpaPage() {
  const [spaModalOpen, setSpaModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('Royal Argan Body Massage');
  const [spaConfirmed, setSpaConfirmed] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [date, setDate] = useState('2026-09-15');

  const treatments = [
    {
      title: 'Royal Argan & Rose Body Scrub',
      duration: '90 Minutes',
      price: '$260',
      desc: 'An invigorating full-body exfoliation using organic crushed rose petals, rare Moroccan argan oil, and mineral sea salts.',
    },
    {
      title: 'Himalayan Hot Stone Hydrotherapy',
      duration: '120 Minutes',
      price: '$340',
      desc: 'Restorative deep muscle therapy utilizing heated Himalayan crystal stones and customized aromatic essential oils.',
    },
    {
      title: 'Diamond Radiance Anti-Aging Facial',
      duration: '75 Minutes',
      price: '$290',
      desc: 'Advanced cellular rejuvenation incorporating pure diamond dust, hyaluronic acid infusion, and lymphatic drainage massage.',
    },
    {
      title: 'Deep Tissue Swedish Massage',
      duration: '60 Minutes',
      price: '$190',
      desc: 'Targeted tension release designed to alleviate muscle stiffness, stimulate circulation, and restore complete physical balance.',
    },
  ];

  const handleSpaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSpaConfirmed(true);
  };

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[480px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Holistic Wellness Sanctuary
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md mb-4">
            Anantara Spa & Hydrotherapy
          </h1>
          <button
            onClick={() => setSpaModalOpen(true)}
            className="btn btn-primary btn-lg uppercase text-xs tracking-[3px] font-tertiary shadow-xl hover:bg-accent-hover cursor-pointer"
          >
            Book Spa Treatment
          </button>
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-20 px-4 lg:px-0">
        {/* Intro */}
        <Reveal variant="fade-up" duration={1000} className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center text-accent text-3xl mb-3">
            <FaSpa />
          </div>
          <h2 className="font-primary text-4xl text-primary mb-4">Rejuvenate Body, Mind & Soul</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Escape into a serene oasis featuring heated hydrotherapy pools, eucalyptus steam grottos, icy plunge baths, and private soundproof treatment pavilions.
          </p>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-6" />
        </Reveal>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {treatments.map((t, idx) => (
            <Reveal
              key={t.title}
              variant="fade-up"
              duration={900}
              delay={idx * 120}
              className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-primary text-2xl text-primary font-semibold">{t.title}</h3>
                    <span className="text-xs uppercase font-tertiary tracking-[2px] text-accent font-semibold">
                      {t.duration}
                    </span>
                  </div>
                  <span className="font-primary text-2xl text-accent font-bold">{t.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.desc}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedTreatment(t.title);
                  setSpaModalOpen(true);
                }}
                className="btn btn-sm btn-primary uppercase text-[11px] tracking-[2px] font-tertiary w-full cursor-pointer shadow-md"
              >
                Book This Treatment
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Spa Modal */}
      {spaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-white max-w-md w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200 relative">
            <button
              onClick={() => {
                setSpaModalOpen(false);
                setSpaConfirmed(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors p-2 text-xl"
            >
              <FaTimes />
            </button>

            {spaConfirmed ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mx-auto mb-4 text-3xl">
                  <FaCheckCircle />
                </div>
                <h3 className="font-primary text-2xl text-primary mb-2">Spa Session Booked</h3>
                <p className="text-sm text-gray-600 mb-6">
                  {guestName || 'Your'} appointment for <span className="font-semibold text-primary">{selectedTreatment}</span> has been confirmed for <span className="font-semibold text-primary">{date}</span>.
                </p>
                <button
                  onClick={() => {
                    setSpaModalOpen(false);
                    setSpaConfirmed(false);
                  }}
                  className="btn btn-primary btn-lg w-full uppercase text-xs tracking-[2px]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSpaSubmit} className="p-8 space-y-4">
                <h3 className="font-primary text-2xl text-primary mb-4 border-b pb-2">Spa Reservation</h3>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Selected Treatment</label>
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full h-11 px-3 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none"
                  >
                    {treatments.map((t) => (
                      <option key={t.title} value={t.title}>{t.title} ({t.price})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Guest Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Eleanor"
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
                      <FaClock className="inline mr-1 text-accent" /> Preferred Time
                    </label>
                    <select className="w-full h-11 px-3 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none">
                      <option>10:00 AM</option>
                      <option>02:00 PM</option>
                      <option>05:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full uppercase text-xs tracking-[2px] mt-4"
                >
                  Confirm Spa Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
