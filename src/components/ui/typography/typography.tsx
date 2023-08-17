import { ReactNode } from "react";

import s from "./typography.module.css";

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
};

export const Typography = () => {
  return <text>123</text>;
};
