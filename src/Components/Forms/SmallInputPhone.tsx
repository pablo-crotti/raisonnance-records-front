import React, { useState } from "react";

type SmallInputPhoneProps = {
  label?: string;
  name: string;
  error: string;
  placeholder?: string;
  autocomplete?: string;
  disabled?: boolean;
  required?: boolean;
};

const SmallInputPhone = ({
  label,
  name,
  error,
  placeholder = "79 123 45 67",
  autocomplete,
  disabled = false,
  required = false,
}: SmallInputPhoneProps) => {
  const [value, setValue] = useState("+41 ");

  const formatPhone = (input: string) => {
    let digits = input.replace(/[^\d]/g, "");

    if (digits.startsWith("41")) digits = digits.slice(2);

    if (digits.startsWith("0")) digits = digits.slice(1);

    digits = digits.slice(0, 9);

    const parts = [];
    if (digits.length > 0) parts.push(digits.substring(0, 2));
    if (digits.length > 2) parts.push(digits.substring(2, 5));
    if (digits.length > 5) parts.push(digits.substring(5, 7));
    if (digits.length > 7) parts.push(digits.substring(7, 9));

    return "+41 " + parts.join(" ");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (!input.startsWith("+41")) return;

    const formatted = formatPhone(input);
    setValue(formatted);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium mb-4 ${
            disabled
              ? "text-neutral-400"
              : error
              ? "text-red-500"
              : "text-neutral-700 text-neutral-300"
          }`}
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type="text"
        disabled={disabled}
        required={required}
        autoComplete={autocomplete ?? "off"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode="numeric"
        className={`w-full text-sm text-start px-4 py-2 border disabled:opacity-50 rounded-lg outline-none transition-all ${
          error
            ? "not-disabled:border-red-500 not-disabled:text-red-500"
            : "text-foreground border-foreground/30 focus:border-neon-purple focus:ring-neon-purple focus:shadow-glow-purple"
        }`}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SmallInputPhone;
