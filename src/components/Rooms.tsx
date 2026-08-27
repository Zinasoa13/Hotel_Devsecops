import { useRoomContext } from '../context/RoomContext';
import { SpinnerDotted } from 'spinners-react';
import Room from './Room';
import Reveal from './Reveal';

/**
 * Room grid with loading overlay. Lists rooms from RoomContext (filtered by capacity when user clicks "Check Now").
 * When loading is true, a full-screen overlay with SpinnerDotted is shown; grid uses responsive cols (1 on mobile, 3 on lg).
 */
export default function Rooms() {
  const { rooms, loading } = useRoomContext();

  return (
    <section className="py-24">
      {loading && (
        <div className="h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center">
          <SpinnerDotted />
        </div>
      )}
      <div className="container mx-auto max-w-7xl lg:px-0">
        <Reveal variant="fade-up" duration={1100} className="text-center mb-16">
          <div className="flex items-center justify-center gap-x-4 mb-3">
            <span className="w-8 h-[1px] bg-accent/60" />
            <p className="font-tertiary uppercase text-[14px] md:text-[15px] tracking-[6px] text-accent font-semibold">
              Hotel & Spa Adina
            </p>
            <span className="w-8 h-[1px] bg-accent/60" />
          </div>
          <h2 className="font-primary text-[40px] md:text-[52px] text-primary tracking-[1px] leading-tight mb-4 drop-shadow-sm">
            Room & Suites
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto opacity-80 rounded-full" />
        </Reveal>
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room, idx) => (
            <Room key={room.id} room={room} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

