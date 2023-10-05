import { useController } from "react-hook-form";

import { Checkbox, CheckboxProps } from "../../ui/checkbox/checkbox";

export type ControlledCheckboxProps = {
  control: any;
  name: any;
} & Omit<CheckboxProps, "checked" | "onValueChange">;

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
