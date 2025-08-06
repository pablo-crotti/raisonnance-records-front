interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  type = "button",
  color = "neon-blue",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`border-2 px-4 w-full disabled:opacity-50 disabled:hover:text-foreground-dark rounded-xl font-bold py-2 cursor-pointer transition-all duation-300${
        color == "neon-blue"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-blue-hover  border-neon-blue hover:text-neon-blue"
          : color == "neon-pink"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-pink-hover  border-neon-pink hover:text-neon-pink"
          : color == "neon-purple"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-purple-hover  border-neon-purple hover:text-neon-purple"
          : color == "neon-green"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-green-hover  border-neon-green hover:text-neon-green"
          : color == "neon-yellow"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-yellow-hover  border-neon-yellow hover:text-neon-yellow"
          : color == "neon-orange"
          ? "text-foreground-light dark:text-foreground-dark neon-glow-orange-hover  border-neon-orange hover:text-neon-orange"
          : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
