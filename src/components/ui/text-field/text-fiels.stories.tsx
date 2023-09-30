import { Meta } from "@storybook/blocks";
import { StoryObj } from "@storybook/react";
import { TextField } from "src/components/ui/text-field/text-field";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
};

satisfies;
Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Llaceholder",
  },
};

export const Password: Story = {
  args: {
    label: "Label",
    placeholder: "Password",
    type: "password",
  },
};

export const Error: Story = {
  args: {
    label: "Input with error",
    value: "Wrong value",
    errorMessage: "Error message",
  },
};
