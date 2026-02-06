interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  error?: string;
  label: string;
}

export default function InputField({
  value,
  setValue,
  error,
  label,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="password" className="font-bold">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`p-2 mb-4 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-border focus:ring-accent"
        }`}
        {...props}
      />
    </div>
  );
}
