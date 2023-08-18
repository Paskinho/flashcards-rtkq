import {Checkbox} from "src/components/ui/checkbox/checkbox";
import {StoryObj} from "@storybook/react";


const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

