import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "cta";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary: "bg-viola text-white hover:bg-viola-dark shadow-soft hover:shadow-hover",
  secondary: "border-2 border-viola text-viola hover:bg-viola hover:text-white",
  cta: "bg-gradient-to-r from-arancione to-arancione-light text-white hover:from-arancione-dark hover:to-arancione shadow-soft hover:shadow-hover",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-heading font-semibold rounded-button transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
