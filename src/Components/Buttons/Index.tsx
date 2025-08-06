import type { ReactNode } from "react";

interface ButtoneProps {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  children: ReactNode;
  isLink?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  disabled = false,
  children,
  isLink = false,
  href = "",
  onClick,
}: ButtoneProps) => {
  if (isLink) {
    return (
      <a
        href={href}
        className="w-full block cursor-pointer  disabled:border-foreground/50 disabled:text-foreground/50 border border-foreground/90 hover:border-neon-pink hover:shadow-glow-neon-pink text-foreground/90 hover:text-neon-pink font-medium py-4 rounded-lg transition-colors text-bold"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="w-full cursor-pointer  disabled:border-foreground/50 disabled:text-foreground/50 border border-foreground/90 hover:border-neon-pink hover:shadow-glow-neon-pink text-foreground/90 hover:text-neon-pink font-medium py-4 rounded-lg transition-colors text-bold"
    >
      {children}
    </button>
  );
};

export default Button;
