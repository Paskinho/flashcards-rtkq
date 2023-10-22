import { ComponentProps } from "react";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  size?: ModalSize;
} & ComponentProps<"div">;

const getSizeClassName = (size: ModalSize) => {
  if (size === "sm") return s.sm;
  if (size === "md") return s.md;
  if (size === "lg") return s.lg;
};

const getContentClassName = (size: ModalSize, className?: string) => {
  const sizeClassName = getSizeClassName(size);

  return clsx(className, s.content, sizeClassName);
};

export const Modal = () => {};
