import { useRoomContext } from '../context/RoomContext';
import { Reveal, ScrollToTop } from '../components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserFriends, FaTrashAlt, FaBed, FaCheckCircle } from 'react-icons/fa';

export default function MyBookingsPage() {
  const { bookings, cancelBooking, openBookingModalForRoom } = useRoomContext();

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[420px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1000} className="z-20 text-center px-4">
          <p className="font-tertiary uppercase text-xs tracking-[6px] text-accent mb-2 font-semibold">
            Your Sanctuary Itinerary
          </p>
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide drop-shadow-md">
            My Reservations
          </h1>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-4" />
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl py-16 px-4 lg:px-0">
        {bookings.length === 0 ? (
          <Reveal variant="fade-up" duration={900} className="text-center py-20 bg-neutral-50 rounded-sm border border-neutral-200 max-w-2xl mx-auto p-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mx-auto mb-4 text-3xl">
              <FaBed />
            </div>
            <h2 className="font-primary text-3xl text-primary mb-2">No Active Reservations Found</h2>
            <p className="text-gray-600 text-sm mb-6">
              You currently have no luxury accommodations booked. Explore our handcrafted rooms and suites to reserve your escape.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/rooms" className="btn btn-primary btn-lg uppercase text-xs tracking-[2px] inline-flex">
                Explore Rooms Catalog
              </Link>
              <button
                onClick={() => openBookingModalForRoom()}
                className="btn btn-secondary btn-lg uppercase text-xs tracking-[2px] inline-flex cursor-pointer"
              >
                Instant Reservation
              </button>
            </div>
          </Reveal>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-primary text-3xl text-primary">
                Active Bookings <span className="text-accent text-xl">({bookings.length})</span>
              </h2>
              <button
                onClick={() => openBookingModalForRoom()}
                className="btn btn-sm btn-primary uppercase text-xs tracking-[2px] cursor-pointer shadow-md"
              >
                + New Booking
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bookings.map((booking, idx) => (
                <Reveal
                  key={booking.id}
                  variant="fade-up"
                  duration={900}
                  delay={idx * 100}
                  className="bg-white p-8 rounded-sm shadow-xl border border-neutral-200 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-mono font-bold px-4 py-1 uppercase tracking-widest">
                    {booking.id}
                  </div>

                  <div>
                    <div className="flex items-center gap-x-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">
                      <FaCheckCircle />
                      <span>Guaranteed Booking</span>
                    </div>

                    <h3 className="font-primary text-2xl text-primary font-bold mb-1">
                      {booking.roomName}
                    </h3>
                    <p className="text-xs text-gray-500 mb-6 font-tertiary uppercase tracking-[1px]">
                      Guest: <span className="text-gray-800 font-semibold">{booking.guestName}</span> • Created: {booking.createdAt}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 bg-neutral-50 rounded-sm">
                        <div className="flex items-center gap-x-2 text-accent text-xs mb-1">
                          <FaCalendarAlt />
                          <span className="font-tertiary uppercase tracking-[1px]">Check-In</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-800">{String(booking.checkIn)}</p>
                      </div>

                      <div className="p-3 bg-neutral-50 rounded-sm">
                        <div className="flex items-center gap-x-2 text-accent text-xs mb-1">
                          <FaCalendarAlt />
                          <span className="font-tertiary uppercase tracking-[1px]">Check-Out</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-800">{String(booking.checkOut)}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-sm mb-6">
                      <div className="flex items-center gap-x-2 text-xs text-gray-600">
                        <FaUserFriends className="text-accent" />
                        <span>{booking.adults}, {booking.kids}</span>
                      </div>
                      <span className="font-primary text-2xl text-accent font-bold">${booking.totalPrice}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-tertiary uppercase tracking-[1px]">
                      Status: Active
                    </span>
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="text-rose-600 hover:text-rose-800 text-xs font-semibold uppercase tracking-wider flex items-center gap-x-1 transition-colors cursor-pointer"
                    >
                      <FaTrashAlt />
                      <span>Cancel Booking</span>
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
