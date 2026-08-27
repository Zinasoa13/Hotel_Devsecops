import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import type { Room as RoomType } from '../types';
import Reveal from './Reveal';

interface RoomProps {
  room: RoomType;
  index?: number;
}

/**
 * Single room card: image (hover scale), size/maxPerson strip, name, short description, "Book now from $price" link.
 * Links to /room/:id for details. Used in a grid by Rooms component with staggered reveal.
 */
export default function Room({ room, index = 0 }: RoomProps) {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <Reveal
      variant="fade-up"
      duration={1000}
      delay={index * 130}
      className="bg-white shadow-xl min-h-[500px] group hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="group-hover:scale-105 transition-transform duration-700 ease-out w-full object-cover h-[280px]"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="bg-white shadow-md max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base relative z-10 border border-neutral-100">
          <div className="flex justify-between w-[80%]">
            <div className="flex items-center gap-x-2">
              <div className="text-accent">
                <BsArrowsFullscreen className="text-[15px]" />
              </div>
              <div className="flex gap-x-1">
                <div>Size</div>
                <div>{size}m2</div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-accent">
                <BsPeople className="text-[18px]" />
              </div>
              <div className="flex gap-x-1">
                <div>Max people</div>
                <div>{maxPerson}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center px-4 -mt-2">
          <Link to={`/room/${id}`}>
            <h3 className="h3 hover:text-accent transition-colors duration-300">{name}</h3>
          </Link>
          <p className="max-w-[300px] mx-auto mb-3 lg:mb-6 text-gray-600 text-sm leading-relaxed">
            {description.slice(0, 75)}...
          </p>
        </div>
      </div>
      <div className="pb-6">
        <Link
          to={`/room/${id}`}
          className="btn btn-secondary btn-sm max-w-[240px] mx-auto transition-transform duration-300 hover:scale-[1.03] active:scale-95 shadow-sm hover:shadow-md"
        >
          Book now from ${price}
        </Link>
      </div>
    </Reveal>
  );
}

