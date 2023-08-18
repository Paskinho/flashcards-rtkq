import { Meta } from "@storybook/blocks";
import { StoryObj } from "@storybook/react";

import { Typography } from "./";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "large",
        "h1",
        "h2",
        "h3",
        "body1",
        "body2",
        "subtitle1",
        "subtitle2",
        "caption",
        "overline",
        "link1",
        "link2",
        "error",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    variant: "large",
    children: "Card content",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Card content",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Card content",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Card content",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Card content",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "Card content",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Card content",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Card content",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Card content",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "Card content",
  },
};

export const Link1: Story = {
  args: {
    variant: "link1",
    children: "Card content",
  },
};

export const Link2: Story = {
  args: {
    variant: "link2",
    children: "Card content",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Card content",
  },
};
