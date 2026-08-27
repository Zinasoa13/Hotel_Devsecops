import { useState } from 'react';
import { useRoomContext } from '../context/RoomContext';
import { FaCheckCircle, FaCalendarAlt, FaUserFriends, FaTimes, FaBed, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';

export default function BookingModal() {
  const {
    selectedRoomToBook,
    activeBookingModal,
    closeBookingModal,
    bookRoom,
    dateCheckIn,
    dateCheckOut,
    adults,
    kids,
  } = useRoomContext();

  const navigate = useNavigate();

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  if (!selectedRoomToBook && !activeBookingModal) return null;

  // Render Step 2: Booking Confirmation Toast/Card
  if (activeBookingModal) {
    const { id, roomName, checkIn, checkOut, adults: ad, kids: kd, totalPrice, guestName: name } = activeBookingModal;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
        <div className="bg-white max-w-lg w-full rounded-sm shadow-2xl overflow-hidden border border-accent/30 relative transform transition-all duration-300 scale-100">
          <button
            onClick={closeBookingModal}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2 text-xl z-20 cursor-pointer"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <div className="bg-primary text-white p-8 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
              <FaCheckCircle />
            </div>
            <p className="font-tertiary uppercase text-xs tracking-[4px] text-accent mb-1">
              Sanctuary Reserved Successfully
            </p>
            <h2 className="font-primary text-3xl tracking-wide">Reservation Confirmed</h2>
            <p className="text-gray-300 text-xs mt-1 font-tertiary tracking-widest uppercase">
              Ref: <span className="text-accent font-mono font-semibold">{id}</span>
            </p>
          </div>

          <div className="p-8">
            <div className="mb-6 pb-4 border-b border-neutral-100 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase font-tertiary tracking-[2px] text-gray-400">Guest Name</p>
                <h3 className="font-primary text-xl text-primary font-semibold">{name}</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Confirmed
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-sm">
                <span className="text-xs uppercase font-tertiary tracking-[1px] text-gray-500">Suite</span>
                <span className="font-primary font-semibold text-primary">{roomName}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-neutral-50 rounded-sm">
                  <div className="flex items-center gap-x-2 text-accent text-xs mb-1">
                    <FaCalendarAlt />
                    <span className="font-tertiary uppercase tracking-[1px]">Check-In</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">{String(checkIn)}</p>
                </div>

                <div className="p-3 bg-neutral-50 rounded-sm">
                  <div className="flex items-center gap-x-2 text-accent text-xs mb-1">
                    <FaCalendarAlt />
                    <span className="font-tertiary uppercase tracking-[1px]">Check-Out</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">{String(checkOut)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-sm">
                <div className="flex items-center gap-x-2 text-accent text-xs">
                  <FaUserFriends />
                  <span className="font-tertiary uppercase tracking-[1px]">Guests</span>
                </div>
                <span className="text-xs font-medium text-gray-800">
                  {ad}, {kd}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-accent/10 border border-accent/20 rounded-sm">
                <span className="font-tertiary uppercase tracking-[2px] text-sm text-primary font-semibold">Total Amount</span>
                <span className="font-primary text-2xl text-accent font-bold">${totalPrice}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  closeBookingModal();
                  navigate('/my-bookings');
                }}
                className="btn btn-secondary h-12 uppercase tracking-[2px] font-tertiary text-xs flex-1 shadow-md cursor-pointer"
              >
                View My Bookings
              </button>
              <button
                onClick={closeBookingModal}
                className="btn btn-primary h-12 uppercase tracking-[2px] font-tertiary text-xs flex-1 shadow-md cursor-pointer"
              >
                Complete & Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Step 1: Room Booking Form Modal
  const room = selectedRoomToBook!;
  const nights = dateCheckIn && dateCheckOut
    ? Math.max(1, Math.ceil((dateCheckOut.getTime() - dateCheckIn.getTime()) / (1000 * 3600 * 24)))
    : 2;
  const computedTotal = room.price * nights;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    bookRoom(room.id, {
      guestName: guestName.trim() || 'Valued Guest',
      totalPrice: computedTotal,
      checkIn: dateCheckIn ? dateCheckIn.toLocaleDateString('en-US') : 'Sep 10, 2026',
      checkOut: dateCheckOut ? dateCheckOut.toLocaleDateString('en-US') : 'Sep 14, 2026',
      adults,
      kids,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden border border-neutral-200 relative my-8">
        <button
          onClick={closeBookingModal}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2 text-xl z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div className="bg-primary text-white p-6 md:p-8 relative">
          <div className="flex items-center gap-x-3 text-accent mb-2">
            <FaBed className="text-2xl" />
            <span className="font-tertiary uppercase text-xs tracking-[4px]">Reserve Luxury Accommodation</span>
          </div>
          <h2 className="font-primary text-2xl md:text-3xl text-white tracking-wide">{room.name}</h2>
          <p className="text-gray-300 text-sm mt-1">${room.price} / night • {room.size}m² • Max {room.maxPerson} Guests</p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmitBooking} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Lord Alexander"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm font-medium text-gray-800 focus:border-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="alexander@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm font-medium text-gray-800 focus:border-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-tertiary tracking-[1px] text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+1 (555) 019-2834"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full h-11 px-4 border border-neutral-300 rounded-sm text-sm font-medium text-gray-800 focus:border-accent outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-14 border border-neutral-300 rounded-sm bg-neutral-50">
              <CheckIn />
            </div>
            <div className="h-14 border border-neutral-300 rounded-sm bg-neutral-50">
              <CheckOut />
            </div>
            <div className="h-14 border border-neutral-300 rounded-sm bg-neutral-50">
              <AdultsDropdown />
            </div>
            <div className="h-14 border border-neutral-300 rounded-sm bg-neutral-50">
              <KidsDropdown />
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="p-4 bg-neutral-50 rounded-sm border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-x-2 text-xs text-gray-600 font-medium">
                <FaShieldAlt className="text-accent" />
                <span>Best Rate Guarantee • Instant Confirmation</span>
              </div>
              <p className="text-xs text-gray-500">
                ${room.price} x {nights} nights ({adults}, {kids})
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase font-tertiary tracking-[1px] text-gray-500 block">Total Due</span>
              <span className="font-primary text-3xl text-accent font-bold">${computedTotal}</span>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-full uppercase tracking-[3px] font-tertiary font-semibold text-sm shadow-xl cursor-pointer"
          >
            Confirm Reservation (${computedTotal})
          </button>
        </form>
      </div>
    </div>
  );
}
