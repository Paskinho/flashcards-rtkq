import { ComponentPropsWithoutRef, ReactNode } from "react";

export type InputProps = {
  label?: string;
  disabled?: boolean;
  inputTextClassName?: string;
  type?: string;
  error?: string;
  onClickClearInput?: () => void;
  searchInput?: boolean;
  width?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = () => {
  return (
    <div>
      <input />
    </div>
  );
};
