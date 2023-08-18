import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import s from "./typography.module.scss";

export type TypographyProps = {
  children: ReactNode;
  color?: "primary" | "secondary" | "inherit" | "error";
  variant?:
    | "large"
    | "h1"
    | "h2"
    | "h3"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"
    | "link1"
    | "link2"
    | "error";
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
) => {
  const {
    variant = "body1",
    color = "inherit",
    className,
    as: Component = "p",
    ...rest
  } = props;

  return (
    <Component
      className={`${s[variant]} ${s[color]} ${className ?? ""}`}
      {...rest}
    />
  );
};
