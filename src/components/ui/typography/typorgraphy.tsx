import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  component?: Ttag;
  className?: string;
  mb?: number | string;
  mt?: number | string;
  mr?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
};

export const Typography = () => {
  return <div>Typography</div>;
};
