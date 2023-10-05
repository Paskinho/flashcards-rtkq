import { useController } from "react-hook-form";
import { Checkbox, CheckboxProps } from "src/components/ui/checkbox/checkbox";

export type ControlledCheckboxProps = { control: any } & CheckboxProps;

export const ControlledCheckbox = ({
  control,
  ...rest
}: ControlledCheckboxProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name: "rememberMe",
    control,
    defaultValue: false,
  });

  return <Checkbox {...rest} />;
};
