import { useController, ControllerProps, FieldValues } from "react-hook-form";

import { Checkbox, CheckboxProps } from "../../ui/checkbox/checkbox";

export type ControlledCheckboxProps<T extends FieldValues> =
  ControllerProps<T> & Omit<CheckboxProps, "checked" | "onValueChange">;

export const ControlledCheckbox = ({
  control,
  name,
  ...rest
}: ControlledCheckboxProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name: "rememberMe",
    control,
    defaultValue: false,
  });

  return (
    <Checkbox {...rest} checked={value} onValueChange={onChange} id={name} />
  );
};
