"use client";

import React from "react";
import { useOutsideClick } from "@/lib/useOutsideClick";
import { CaretDownIcon } from "@phosphor-icons/react";
interface DropdownProps {
  id?: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
const Dropdown: React.FC<DropdownProps> = ({
  id,
  className,
  children,
  label,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div id={id} className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="p-4 transition-colors duration-200 cursor-pointer hover:text-primary hover:bg-accent"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
      </button>

      {isOpen && (
        <ul className="absolute left-0 z-10 flex flex-col items-center justify-center w-full p-0 mt-2 shadow-sm top-full">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
