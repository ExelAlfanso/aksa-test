import Link from "next/link";
import React from "react";

interface DropdownItemProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}
const DropdownItem = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ href, children, className, onClick }, ref) => {
    return (
      <li className={`w-full`} ref={ref}>
        {!href ? (
          <button
            className="flex w-full px-3 py-2 cursor-pointer bg-background hover:bg-accent"
            onClick={onClick}
          >
            {children}
          </button>
        ) : (
          <Link
            href={href || "#"}
            className={`${className} px-3 py-2 bg-background hover:bg-accent flex`}
          >
            {children}
          </Link>
        )}
      </li>
    );
  },
);
DropdownItem.displayName = "DropdownItem";
export default DropdownItem;
