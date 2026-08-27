import type { IconType } from 'react-icons';

/** Single facility item (e.g. Wifi, Coffee) with name and icon for room details. Icon is a react-icons component. */
export interface Facility {
  name: string;
  icon: IconType;
}

/** Room entity: used in mockData, RoomContext, Room card, and RoomDetails page. */
export interface Room {
  id: number;
  name: string;
  description: string;
  facilities: Facility[];
  amenities?: Facility[];
  size: number;
  maxPerson: number;
  maxCapacity?: number;
  adults?: number;
  kids?: number;
  price: number;
  image: string;
  imageLg: string;
  imagesGallery?: string[];
}


