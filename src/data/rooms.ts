import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';
import type { Room } from '../types';
import images from '../assets';

// Shared facility list (name + icon) used for every room; icons from react-icons/fa.
const facilities = [
  { name: 'Wifi', icon: FaWifi },
  { name: 'Coffee', icon: FaCoffee },
  { name: 'Bath', icon: FaBath },
  { name: 'Parking Space', icon: FaParking },
  { name: 'Swimming Pool', icon: FaSwimmingPool },
  { name: 'Breakfast', icon: FaHotdog },
  { name: 'GYM', icon: FaStopwatch },
  { name: 'Drinks', icon: FaCocktail },
];

const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.';

// Static room list: used as initial state in RoomContext and filtered by handleCheck (total <= maxPerson).
export const roomData: Room[] = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'A refined sanctuary featuring handcrafted teak furnishings, a plush king-size bed, private marble bath, and tranquil courtyard views tailored for intimate luxury.',
    facilities: [...facilities],
    size: 35,
    maxPerson: 1,
    price: 185,
    image: images.Room1Img,
    imageLg: images.Room1ImgLg,
  },
  {
    id: 2,
    name: 'Signature Ocean Room',
    description:
      'Immerse yourself in coastal grandeur with floor-to-ceiling glass windows, private balcony lounge, soaking tub, and bespoke room concierge service.',
    facilities: [...facilities],
    size: 70,
    maxPerson: 2,
    price: 290,
    image: images.Room2Img,
    imageLg: images.Room2ImgLg,
  },
  {
    id: 3,
    name: 'Deluxe Garden Suite',
    description:
      'Surrounded by lush Mediterranean flora, this suite offers dual rain showers, a spacious sun deck, integrated acoustic soundscapes, and nightly turn-down rituals.',
    facilities: [...facilities],
    size: 55,
    maxPerson: 3,
    price: 365,
    image: images.Room3Img,
    imageLg: images.Room3ImgLg,
  },
  {
    id: 4,
    name: 'Luxury Panorama Room',
    description:
      'Unrivaled elevated vistas over the estate. Designed with custom Italian linen, oversized lounge area, walk-in dressing room, and private sommelier bar.',
    facilities: [...facilities],
    size: 65,
    maxPerson: 4,
    price: 420,
    image: images.Room4Img,
    imageLg: images.Room4ImgLg,
  },
  {
    id: 5,
    name: 'Presidential Penthouse Suite',
    description:
      'The pinnacle of luxury living. Features a private infinity plunge pool, wrap-around ocean terrace, personal butler service, and private dining salon.',
    facilities: [...facilities],
    size: 110,
    maxPerson: 5,
    price: 580,
    image: images.Room5Img,
    imageLg: images.Room5ImgLg,
  },
  {
    id: 6,
    name: 'Deluxe Family Sanctuary',
    description:
      'Expansive multi-bedroom villa layout with interconnected lounges, private garden terrace, gourmet kitchen amenities, and dedicated family concierge service.',
    facilities: [...facilities],
    size: 95,
    maxPerson: 6,
    price: 640,
    image: images.Room6Img,
    imageLg: images.Room6ImgLg,
  },
  {
    id: 7,
    name: 'Grand Royal Pavilion',
    description:
      'An iconic retreat featuring private spa treatment rooms, outdoor heated jacuzzi, grand fireplace, and round-the-clock chauffeured transport.',
    facilities: [...facilities],
    size: 140,
    maxPerson: 7,
    price: 790,
    image: images.Room7Img,
    imageLg: images.Room7ImgLg,
  },
  {
    id: 8,
    name: 'Imperial Ocean Villa',
    description:
      'Unmatched beachfront exclusivity. Includes private beach access, direct boat mooring, private chef services, and panoramic sunset vistas.',
    facilities: [...facilities],
    size: 180,
    maxPerson: 8,
    price: 950,
    image: images.Room8Img,
    imageLg: images.Room8ImgLg,
  },
];

