import { Control, FieldPath, FieldValues } from "react-hook-form";

import { TextFieldProps } from "../../ui/text-field";

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
} & Omit<TextFieldProps, "onChange" | "value" | "id">;

export const ControlledTextField = () => {};
