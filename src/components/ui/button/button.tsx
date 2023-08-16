import { ComponentPropsWithoutRef } from "react";

import s from "button.module.css";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  variant = "primary",
  fullWidth,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ""} ${className}`}
      {...rest}
    />
  );
};
