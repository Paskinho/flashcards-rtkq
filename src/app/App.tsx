import { LoginForm } from "src/components/auth/login-form/login-form";
import { Avatar } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { Modal } from "src/components/ui/modal";
import { Page } from "src/components/ui/page";
import { Pagination } from "src/components/ui/pagination";
import { Slider } from "src/components/ui/slider/slider";
import { TextField } from "src/components/ui/text-field";
import { Toggle } from "src/components/ui/toggle";
import { Typography } from "src/components/ui/typography";

export function App() {
  return (
    <div>
      <Button variant={"tertiary"}>Hello</Button>
      <Typography>Typography</Typography>
      {/*<Card>Card</Card>*/}
      {/*<Checkbox></Checkbox>*/}
      {/*<Checkbox />*/}
      <TextField label={"input"} />
      <LoginForm />
      <Slider />
      <Modal open={false} />
      <Avatar />
      <Page />
      {/*<Pagination />*/}
      {/*<Toggle />*/}
    </div>
  );
}
