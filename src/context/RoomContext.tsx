import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { RoomContextValue, Room, Booking } from '../types';
import { mockRooms, mockBookings } from '../data';


const RoomInfo = createContext<RoomContextValue | null>(null);

/**
 * RoomContext provides room list, loading state, guest counts (adults/kids),
 * dates (dateCheckIn/dateCheckOut), room filtering, localStorage booking persistence, and modal booking flows.
 */
export function RoomContext({ children }: { children: ReactNode }) {
  const [rooms, setRooms] = useState(mockRooms);
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [dateCheckIn, setDateCheckIn] = useState<Date | null>(null);
  const [dateCheckOut, setDateCheckOut] = useState<Date | null>(null);
  const [total, setTotal] = useState(0);

  // Initialize bookings from localStorage or fallback to mockBookings
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('hotel_bookings');
      return saved ? JSON.parse(saved) : mockBookings;
    } catch {
      return mockBookings;
    }
  });

  const [activeBookingModal, setActiveBookingModal] = useState<Booking | null>(null);
  const [selectedRoomToBook, setSelectedRoomToBook] = useState<Room | null>(null);

  // Save bookings to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem('hotel_bookings', JSON.stringify(bookings));
    } catch {
      // Ignore storage quota errors
    }
  }, [bookings]);

  // Keep total guests count in sync with adults/kids (e.g. "2 Adults" + "1 Kid" -> 3).
  useEffect(() => {
    const adultsCount = parseInt(adults, 10) || 1;
    const kidsCount = parseInt(kids, 10) || 0;
    setTotal(adultsCount + kidsCount);
  }, [adults, kids]);

  // Restore initial guest counts and show all rooms again.
  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    setDateCheckIn(null);
    setDateCheckOut(null);
    setRooms(mockRooms);
  };

  // Filter rooms function triggered by "Check Now" or programmatic filter
  const filterRooms = () => {
    setLoading(true);
    const filtered = mockRooms.filter((room) => total <= room.maxPerson);
    setTimeout(() => {
      setLoading(false);
      setRooms(filtered);

      // Smooth scroll to rooms grid
      const roomsElement = document.getElementById('rooms') || document.querySelector('.rooms-section');
      if (roomsElement) {
        roomsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  // On "Check Now" button submit: prevent reload, filter rooms, scroll to grid
  const handleCheck = (e: React.FormEvent) => {
    e?.preventDefault();
    filterRooms();
  };

  const openBookingModalForRoom = (room?: Room) => {
    setSelectedRoomToBook(room || rooms[0] || mockRooms[0]);
  };

  // Simulate booking a room with success modal confirmation
  const bookRoom = (roomId: number, details?: Partial<Booking>) => {
    const targetRoom = mockRooms.find((r) => r.id === roomId) || rooms[0];
    const newBooking: Booking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      roomId: targetRoom.id,
      roomName: targetRoom.name,
      checkIn: dateCheckIn ? dateCheckIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (details?.checkIn || 'Flexible Check-In'),
      checkOut: dateCheckOut ? dateCheckOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : (details?.checkOut || 'Flexible Check-Out'),
      adults: details?.adults || adults,
      kids: details?.kids || kids,
      totalPrice: details?.totalPrice || targetRoom.price * 2,
      guestName: details?.guestName || 'Distinguished Guest',
      createdAt: new Date().toLocaleDateString('en-US'),
    };

    setBookings((prev) => [newBooking, ...prev]);
    setSelectedRoomToBook(null);
    setActiveBookingModal(newBooking);
  };

  const closeBookingModal = () => {
    setActiveBookingModal(null);
    setSelectedRoomToBook(null);
  };

  const cancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  const value: RoomContextValue = {
    rooms,
    loading,
    adults,
    setAdults,
    kids,
    setKids,
    dateCheckIn,
    setDateCheckIn,
    dateCheckOut,
    setDateCheckOut,
    handleCheck,
    filterRooms,
    resetRoomFilterData,
    bookRoom,
    bookings,
    activeBookingModal,
    selectedRoomToBook,
    openBookingModalForRoom,
    closeBookingModal,
    cancelBooking,
  };

  return <RoomInfo.Provider value={value}>{children}</RoomInfo.Provider>;
}

/* eslint-disable react-refresh/only-export-components */
/** Hook to read/write room state and actions. Must be used inside a RoomContext provider. */
export function useRoomContext(): RoomContextValue {
  const ctx = useContext(RoomInfo);
  if (!ctx) throw new Error('useRoomContext must be used within RoomContext');
  return ctx;
}


