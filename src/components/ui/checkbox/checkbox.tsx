import { ReactNode } from "react";

export type Checkbox = {};

export type CheckboxProps = {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  id?: string;
  position?: "left";
};

export const Checkbox = ({
  className,
  checked,
  onChange,
  disabled,
  required,
  label,
  id,
  position,
}) => {
  return (

      const classNames = {

      }

      <Flex>
      <Text size="2">
        <label>
          <Checkbox mr="1" defaultChecked /> Agree to Terms and Conditions
        </label>
      </Text>
    </Flex>
  );
};
