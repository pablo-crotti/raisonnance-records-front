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
        className="w-full block cursor-pointer disabled:border-foreground-light/50 dark:disabled:border-foreground-dark/50 disabled:text-foreground-light/50 dark:disabled:text-foreground-dark/50 border border-foreground-light/90 dark:border-foreground-dark/90 hover:border-primary hover:shadow-glow-primary text-foreground-light/90 dark:text-foreground-dark/90 hover:text-primary font-medium py-4 rounded-lg transition-colors text-bold"
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
      className="w-full cursor-pointer disabled:border-foreground-light/50 dark:disabled:border-foreground-dark/50 disabled:text-foreground-light/50 dark:disabled:text-foreground-dark/50 border border-foreground-light/90 dark:border-foreground-dark/90 hover:border-primary hover:shadow-glow-primary text-foreground-light/90 dark:text-foreground-dark/90 hover:text-primary font-medium py-4 rounded-lg transition-colors text-bold"
    >
      {children}
    </button>
  );
};

export default Button;
