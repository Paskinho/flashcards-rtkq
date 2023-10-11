export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
} & Omit<TextFieldProps, "onChange" | "value" | "id">;

export const ControlledTextField = () => {};
