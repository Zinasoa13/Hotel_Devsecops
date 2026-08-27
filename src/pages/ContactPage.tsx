import { useState } from 'react';
import { Reveal, ScrollToTop } from '../components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaChevronDown } from 'react-icons/fa';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'What is your check-in and check-out schedule?', a: 'Check-in begins at 15:00. Check-out is until 12:00 noon. Early check-in and late departure can be arranged with our private concierge.' },
    { q: 'Do you offer private chauffeured airport transfers?', a: 'Yes. We provide chauffeured Rolls-Royce, Mercedes Maybach, and private helicopter transfers from all major regional hubs upon request.' },
    { q: 'Are pets allowed in the luxury suites?', a: 'We welcome small pets up to 10kg in designated private villas, featuring custom pet beds and artisanal gourmet menus.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[420px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            24/7 Dedicated Concierge
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md">
            Contact & Location
          </h1>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-4" />
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-20 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Details Column */}
          <Reveal variant="fade-right" duration={1000} className="space-y-8">
            <div>
              <p className="font-tertiary uppercase text-xs tracking-[4px] text-accent font-semibold mb-2">Get In Touch</p>
              <h2 className="font-primary text-3xl text-primary">Concierge Office</h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Our guest relations team is available around the clock to assist with bespoke itineraries, dining reservations, and private transfers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-x-4 p-4 bg-neutral-50 rounded-sm border border-neutral-200">
                <div className="text-accent text-2xl mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-gray-800">Address</h4>
                  <p className="text-xs text-gray-600">Boulevard du Cap, 06600 Antibes, French Riviera</p>
                </div>
              </div>

              <div className="flex items-start gap-x-4 p-4 bg-neutral-50 rounded-sm border border-neutral-200">
                <div className="text-accent text-2xl mt-1">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-gray-800">Direct Reservations</h4>
                  <p className="text-xs text-gray-600">+33 (0)4 93 61 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-x-4 p-4 bg-neutral-50 rounded-sm border border-neutral-200">
                <div className="text-accent text-2xl mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-primary font-semibold text-gray-800">Electronic Mail</h4>
                  <p className="text-xs text-gray-600">concierge@hotel-adina.com</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Interactive Form Column */}
          <Reveal variant="fade-left" duration={1000} className="lg:col-span-2 bg-white p-8 md:p-10 rounded-sm shadow-xl border border-neutral-100">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mx-auto mb-4 text-3xl">
                  <FaCheckCircle />
                </div>
                <h3 className="font-primary text-3xl text-primary mb-2">Message Transmitted</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-primary">{name || 'Guest'}</span>. Our Chief Concierge will respond to your inquiry at <span className="font-semibold text-primary">{email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="btn btn-primary btn-lg uppercase text-xs tracking-[2px] inline-flex"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-primary text-2xl text-primary mb-2 border-b pb-4">Inquire / Special Requests</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Private Event / Helicopter Transfer / Suite Customization"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Detail your request or special requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 border border-neutral-300 rounded-sm text-sm text-gray-800 outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full uppercase text-xs tracking-[3px] font-tertiary font-semibold shadow-xl cursor-pointer"
                >
                  Send Inquiry to Concierge
                </button>
              </form>
            )}
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <Reveal variant="fade-up" duration={1000} className="max-w-4xl mx-auto">
          <h3 className="font-primary text-3xl text-primary text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-sm border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-primary font-semibold text-lg text-primary flex justify-between items-center cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className={`text-accent text-sm transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-neutral-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
