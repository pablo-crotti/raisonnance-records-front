type InputTextProps = {
  label: string;
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  error: string;
  autocomplete?: string;
  disabled?: boolean;
  required?: boolean;
};

const InputText = ({
  label,
  type,
  name,
  placeholder,
  error,
  autocomplete,
  disabled = false,
  required = false,
}: InputTextProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-sm font-medium  mb-4 ${
          disabled
            ? "text-neutral-400"
            : error
            ? "text-red-500"
            : "text-neutral-300"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        disabled={disabled}
        required={required}
        autoComplete={autocomplete ? autocomplete : "off"}
        className={`w-full px-4 py-4 border disabled:opacity-50 rounded-lg  outline-none transition-all ${
          error
            ? "not-disabled:border-red-500 not-disabled:text-red-500"
            : "text-foreground  border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple focus:shadow-glow-purple"
        }`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
export default InputText;
