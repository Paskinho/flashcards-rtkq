import { Card } from "src/components/ui/card/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: <Typography variant={'large'}>Card</Typography>,
        style: {
            width: '300px',
            height: '300px',
            padding: '24px',
        },
    },
}
