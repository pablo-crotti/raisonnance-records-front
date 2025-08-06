import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  selectedOption: string;
  label: string;
  error: string;
  disabled?: boolean;
  select: (value: string) => void;
}

const Select = ({
  options,
  selectedOption,
  label,
  error,
  disabled = false,
  select,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`w-full text-sm text-start px-4 py-2 border disabled:opacity-50 rounded-lg outline-none transition-all flex justify-between items-center cursor-pointer disabled:cursor-not-allowed ${
          error
            ? "not-disabled:border-red-500 not-disabled:text-red-500"
            : " text-foreground  border-foreground/30 focus:border-neon-purple focus:ring-neon-purple focus:shadow-glow-purple"
        }`}
      >
        {options.find((o) => o.value === selectedOption)?.label ?? label}
        <ChevronDown
          className={`h-4 w-4 transition-all duration-300 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
      <div className="w-full relative h-auto">
        <div
          className={`absolute z-20 transition-all duration-300 origin-top border-foreground/30 border w-full text-sm text-start px-2 py-2 bg-background rounded-md ${
            open ? "scale-100 top-2" : "scale-0 top-0"
          }`}
        >
          {options.map((option, index) => (
            <button
              key={index}
              disabled={option.value === selectedOption}
              onClick={() => {
                select(option.value);
                setOpen(false);
              }}
              className=" disabled:text-foreground/50 disabled:hover:bg-background text-foreground  w-full text-start pl-8 py-2 rounded-md"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Select;
