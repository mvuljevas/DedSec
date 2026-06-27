import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseButtonClass =
  "dedsec-button inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition";

const variants: Record<ButtonVariant, string> = {
  primary: "dedsec-button-primary",
  secondary: "dedsec-button-secondary"
};

function composeClassName(
  variant: ButtonVariant,
  className: string | undefined
): string {
  return [baseButtonClass, variants[variant], className].filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={composeClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <a className={composeClassName(variant, className)} {...props}>
      {children}
    </a>
  );
}
