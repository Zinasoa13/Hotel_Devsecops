import {
  AdultsDropdown,
  CheckIn,
  CheckOut,
  KidsDropdown,
  Reveal,
  ScrollToTop,
} from "../components";
import { useRoomContext } from "../context/RoomContext";
import { hotelRules } from "../data";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import type { Facility } from "../types";

/**
 * Room detail page: hero, description, facilities grid, reservation sidebar (dates + guests), hotel rules.
 * Room is resolved from URL param :id via useParams(); we look up in context rooms (so filtered list applies).
 * Includes luxury motion reveal animations on all sections and staggered elements.
 */
export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const { rooms, bookRoom } = useRoomContext();
  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return (
      <section>
        <ScrollToTop />
        <div className="container mx-auto max-w-7xl py-24 text-center">
          <Reveal variant="fade-up" duration={800}>
            <p className="text-xl text-gray-500 font-primary">Room not found.</p>
          </Reveal>
        </div>
      </section>
    );
  }

  const { name, description, facilities, price, imageLg } = room;

  return (
    <section>
      <ScrollToTop />
      {/* Hero Banner */}
      <div className="bg-room h-[560px] relative flex justify-center items-center bg-cover bg-center overflow-hidden">
        <div className="absolute w-full h-full bg-black/60 backdrop-blur-[1px]" />
        <Reveal variant="fade-down" duration={1100} delay={100} className="z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-primary text-center tracking-wide">
            {name} Details
          </h1>
          <div className="w-20 h-[2px] bg-accent mx-auto mt-4" />
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-x-12 h-full py-24 px-4 lg:px-0">

          {/* Main Room Content Column */}
          <div className="w-full h-full text-justify flex-1">
            <Reveal variant="fade-up" duration={1000} delay={150}>
              <h2 className="h2 font-primary text-primary">{name}</h2>
              <p className="mb-8 text-gray-700 leading-relaxed text-base">{description}</p>
            </Reveal>

            <Reveal variant="scale-up" duration={1100} delay={300} className="mb-8 overflow-hidden rounded-sm shadow-xl">
              <img
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700 ease-out"
                src={imageLg}
                alt={name}
              />
            </Reveal>

            <Reveal variant="fade-up" duration={1000} delay={200} className="mt-8">
              <h3 className="h3 mb-3 font-primary">Hotel Rules & Amenities</h3>
              <p className="mb-10 text-gray-600 leading-relaxed">
                Experience unmatched comfort and luxury elegance. Our rooms are crafted to provide tranquility, featuring state-of-the-art facilities, handcrafted luxury furnishings, and personalized concierge services designed around your stay.
              </p>
            </Reveal>

            {/* Facilities grid with staggered reveal */}
            <Reveal variant="fade-up" duration={900} delay={150}>
              <h4 className="font-tertiary uppercase text-[15px] tracking-[4px] text-accent mb-6">
                Room Amenities
              </h4>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {facilities.map((item: Facility, index: number) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={index}
                    variant="fade-up"
                    duration={900}
                    delay={index * 80}
                    className="flex items-center gap-x-3 p-3 bg-neutral-50 rounded-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100"
                  >
                    <div className="text-3xl text-accent">
                      <Icon />
                    </div>
                    <div className="text-base font-secondary font-medium text-gray-800">{item.name}</div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Sidebar: reservation form and hotel rules */}
          <div className="w-full lg:max-w-sm h-full shrink-0">
            {/* Reservation Card */}
            <Reveal variant="fade-left" duration={1000} delay={200} className="py-8 px-6 bg-accent/15 mb-12 w-full rounded-sm shadow-lg border border-accent/20">
              <div className="flex flex-col space-y-4 mb-6 w-full">
                <h3 className="h3 font-primary border-b border-accent/30 pb-2">Your Reservation</h3>
                <div className="h-[60px] w-full">
                  <CheckIn popperPlacement="bottom-end" popperFullWidth />
                </div>
                <div className="h-[60px] w-full">
                  <CheckOut popperPlacement="bottom-end" popperFullWidth />
                </div>
                <div className="h-[60px] w-full">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px] w-full">
                  <KidsDropdown />
                </div>
              </div>
              <button
                type="button"
                onClick={() => bookRoom(room.id, { totalPrice: price * 2 })}
                className="btn btn-lg btn-primary w-full shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              >
                book now for ${price}
              </button>
            </Reveal>

            {/* Hotel Rules Section */}
            <Reveal variant="fade-left" duration={1000} delay={350} className="p-6 bg-neutral-50 rounded-sm border border-neutral-200 shadow-sm">
              <h3 className="h3 mb-3">Hotel Rules</h3>
              <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                To preserve the peace and comfort of all our distinguished guests, we respectfully ask that you adhere to our hotel policies.
              </p>
              <ul className="flex flex-col gap-y-4">
                {hotelRules.map(({ rules }, idx) => (
                  <Reveal
                    key={idx}
                    variant="fade-left"
                    duration={800}
                    delay={400 + idx * 70}
                    as="li"
                    className="flex items-center gap-x-4 text-sm font-medium text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <FaCheck className="text-accent text-xs" />
                    </div>
                    <span>{rules}</span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

