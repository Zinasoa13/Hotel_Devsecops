import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown } from './index';
import { useRoomContext } from '../context/RoomContext';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Booking search bar: check-in/out dates and guest counts.
 * Submit triggers room filtering (handleCheck) and navigates to /rooms if on a secondary page.
 */
export default function BookForm() {
  const { handleCheck } = useRoomContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCheck(e);
    if (location.pathname !== '/' && location.pathname !== '/rooms') {
      navigate('/rooms');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-sm overflow-hidden">
      <div className="flex flex-col w-full h-auto lg:h-[80px] lg:flex-row">
        <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-neutral-200/60 w-full h-[60px] lg:h-full">
          <CheckIn />
        </div>
        <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-neutral-200/60 w-full h-[60px] lg:h-full">
          <CheckOut />
        </div>
        <div className="flex-1 min-w-0 border-b lg:border-b-0 lg:border-r border-neutral-200/60 w-full h-[60px] lg:h-full">
          <AdultsDropdown />
        </div>
        <div className="flex-1 min-w-0 border-b lg:border-b-0 border-neutral-200/60 w-full h-[60px] lg:h-full">
          <KidsDropdown />
        </div>
        <button
          type="submit"
          className="btn btn-primary h-[60px] lg:h-full text-[15px] font-tertiary tracking-[3px] uppercase font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-md flex justify-center items-center px-10 shrink-0 cursor-pointer"
        >
          Check Now
        </button>
      </div>
    </form>
  );
}


