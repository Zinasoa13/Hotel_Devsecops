import type { Room, Booking } from './room';

/** Room context state and actions exposed to consumers via useRoomContext(). */
export interface RoomContextValue {
  rooms: Room[];
  loading: boolean;
  adults: string;
  setAdults: (value: string) => void;
  kids: string;
  setKids: (value: string) => void;
  dateCheckIn: Date | null;
  setDateCheckIn: (date: Date | null) => void;
  dateCheckOut: Date | null;
  setDateCheckOut: (date: Date | null) => void;
  handleCheck: (e: React.FormEvent) => void;
  filterRooms: () => void;
  resetRoomFilterData: () => void;
  bookRoom: (roomId: number, details?: Partial<Booking>) => void;
  bookings: Booking[];
  activeBookingModal: Booking | null;
  selectedRoomToBook: Room | null;
  openBookingModalForRoom: (room?: Room) => void;
  closeBookingModal: () => void;
  cancelBooking: (bookingId: string) => void;
}


