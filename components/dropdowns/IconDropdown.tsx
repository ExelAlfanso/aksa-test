"use client";

import React from "react";
import { useOutsideClick } from "@/lib/useOutsideClick";
import { SunIcon } from "@phosphor-icons/react/dist/icons/Sun";
import { useTheme } from "@/providers/ThemeProvider";
interface IconDropdownProps {
  id?: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  Icon: React.ReactNode;
}
const IconDropdown: React.FC<IconDropdownProps> = ({
  id,
  className,
  children,
  Icon,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));
  const theme = useTheme();
  return (
    <div id={id} className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 transition-colors duration-200 cursor-pointer hover:text-primary hover:bg-accent"
      >
        {Icon}
      </button>

      {isOpen && (
        <ul className="absolute left-0 z-10 flex flex-col items-center justify-center w-32 p-0 mt-2 shadow-sm top-full">
          {children}
        </ul>
      )}
    </div>
  );
};

export default IconDropdown;
