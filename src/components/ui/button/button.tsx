import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = () => {
  return <div>Button</div>;
};
