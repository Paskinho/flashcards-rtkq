import { ComponentProps } from "react";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  title?: string;
  size?: ModalSize;
} & ComponentProps<"div">;

const dropIn = {
  hidden: {
    y: "-100vh",
    x: "-50%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const getContentClassName = (size: ModalSize, className?: string) => {
  const sizeClassName = getSizeClassName(size);

  return clsx(className, s.content, sizeClassName);
};

const getSizeClassName = (size: ModalSize) => {
  if (size === "sm") return s.sm;
  if (size === "md") return s.md;
  if (size === "lg") return s.lg;
};

export const Modal = () => {};
