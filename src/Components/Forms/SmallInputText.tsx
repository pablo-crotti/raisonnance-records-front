type SmallInputTextProps = {
  label?: string;
  type?: "text" | "email" | "password" | "textarea";
  name: string;
  placeholder: string;
  error: string;
  autocomplete?: string;
  disabled?: boolean;
  required?: boolean;
};

const SmallInputText = ({
  label,
  type = "text",
  name,
  placeholder,
  error,
  autocomplete,
  disabled = false,
  required = false,
}: SmallInputTextProps) => {
  return (
    <div>
      {label && (
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
      )}
      {type != "textarea" ? (
        <input
          id={name}
          type={type}
          name={name}
          disabled={disabled}
          required={required}
          autoComplete={autocomplete ? autocomplete : "off"}
          placeholder={placeholder}
          className={`w-full text-sm text-start px-4 py-2 border disabled:opacity-50 rounded-lg  outline-none transition-all ${
            error
              ? "not-disabled:border-red-500 not-disabled:text-red-500"
              : "text-foreground-light dark:text-foreground-dark  dark:border-foreground-dark/30 focus:border-neon-purple focus:ring-neon-purple focus:shadow-glow-purple"
          }`}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          rows={8}
          className={`w-full text-sm text-start px-4 py-2 border disabled:opacity-50 rounded-lg  outline-none transition-all ${
            error
              ? "not-disabled:border-red-500 not-disabled:text-red-500"
              : "text-foreground-light dark:text-foreground-dark  dark:border-foreground-dark/30 focus:border-neon-purple focus:ring-neon-purple focus:shadow-glow-purple"
          }`}
        />
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
export default SmallInputText;
