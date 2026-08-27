import { BsCalendar } from "react-icons/bs";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import DatePicker from "react-datepicker";
import { useRoomContext } from "../context/RoomContext";
import "react-datepicker/dist/react-datepicker.css";
import "../style/datepicker.css";

// Interop check for DatePicker default export in Vite/ESM environments
const DatePickerComponent =
  typeof DatePicker === "function"
    ? DatePicker
    : ((DatePicker as unknown as { default: typeof DatePicker }).default || DatePicker);


/** CheckOut datepicker props: placement of calendar popover and optional full-width in container. */
type CheckOutProps = {
  popperPlacement?: "bottom-start" | "bottom-end";
  popperFullWidth?: boolean;
};

/**
 * Check-out date field: react-datepicker bound to RoomContext (dateCheckOut/setDateCheckOut).
 * Full height/width clickable container with 100% crisp legibility.
 */
export default function CheckOut({
  popperPlacement = "bottom-start",
  popperFullWidth = false,
}: CheckOutProps) {
  const { dateCheckOut, setDateCheckOut } = useRoomContext();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const suppressOpenRef = useRef(false);
  const DATEPICKER_OPEN = "datepicker-open";
  const ID = "checkout";

  // Close when clicking outside.
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // When CheckIn opens, this calendar closes (and vice versa).
  useEffect(() => {
    const onOtherOpen = (e: Event) => {
      if ((e as CustomEvent<{ id: string }>).detail?.id !== ID) setIsOpen(false);
    };
    document.addEventListener(DATEPICKER_OPEN, onOtherOpen);
    return () => document.removeEventListener(DATEPICKER_OPEN, onOtherOpen);
  }, []);

  useLayoutEffect(() => {
    if (!popperFullWidth || !isOpen) return;
    const w = wrapperRef.current?.offsetWidth;
    if (w) document.body.style.setProperty("--datepicker-popper-width", `${w}px`);
    return () => {
      document.body.style.removeProperty("--datepicker-popper-width");
    };
  }, [popperFullWidth, isOpen]);

  const handleOpen = () => {
    if (suppressOpenRef.current) return;
    document.dispatchEvent(new CustomEvent(DATEPICKER_OPEN, { detail: { id: ID } }));
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (date: Date | null) => {
    setDateCheckOut(date);
    suppressOpenRef.current = true;
    setIsOpen(false);
    setTimeout(() => {
      suppressOpenRef.current = false;
    }, 200);
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center justify-end h-full w-full min-w-0 cursor-pointer">
      <div
        className="absolute z-10 pr-6 cursor-pointer pointer-events-none"
        aria-label="Toggle calendar"
      >
        <BsCalendar className="text-accent text-base" />
      </div>
      <DatePickerComponent
        className="w-full h-full text-gray-800 font-secondary text-sm md:text-base font-medium bg-transparent cursor-pointer outline-none border-0"
        selected={dateCheckOut}
        placeholderText="Check out"
        onChange={handleChange}
        popperPlacement={popperPlacement}
        popperClassName={popperFullWidth ? "datepicker-popper-fullwidth" : undefined}
        open={isOpen}
        onInputClick={handleOpen}
        onCalendarOpen={handleOpen}
        onCalendarClose={handleClose}
        onClickOutside={handleClose}
      />
    </div>
  );
}


