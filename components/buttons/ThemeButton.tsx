export default function ThemeButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
}
