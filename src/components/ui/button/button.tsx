import { ComponentPropsWithoutRef } from "react";

import s from "./button.module.css";

export type ButtonProps = {
  as: any;
  variant?: "primary" | "secondary" | "tertiary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  as,
  variant = "primary",
  fullWidth,
  className,
  ...rest
}: ButtonProps) => {
  const Component = as || "button";

  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ""} ${className}`}
      {...rest}
    />
  );
};
