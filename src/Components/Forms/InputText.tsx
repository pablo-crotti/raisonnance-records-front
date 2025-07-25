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
            : "text-neutral-700 dark:text-neutral-300"
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
        className={`w-full  px-4 py-4 border dark:disabled:text-neutral-400 rounded-lg  outline-none transition-all ${
          error
            ? "not-disabled:border-red-500 not-disabled:text-red-500"
            : "text-foreground-light dark:text-foreground-dark  border-primary/30 focus:border-primary focus:ring-primary focus:shadow-glow-primary"
        }`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
export default InputText;
