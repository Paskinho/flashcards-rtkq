import { ComponentProps } from "react";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  size?: ModalSize;
} & ComponentProps<"div">;

export const Modal = () => {};
