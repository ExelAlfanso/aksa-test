interface SearchInputFieldProps {
  searchTerm?: string;
  handleSearch: (term: string) => void;
  className?: string;
}

export default function SearchInputField({
  searchTerm,
  handleSearch,
  className,
}: SearchInputFieldProps) {
  return (
    <input
      type="text"
      placeholder="Search by name or category..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      className={`${className} px-4 py-2.5 text-xs md:text-sm border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-accent`}
    />
  );
}
