interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`p-2 font-semibold transition-colors duration-200 border rounded-lg cursor-pointer border-border hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
    >
      {children}
    </button>
  );
}
