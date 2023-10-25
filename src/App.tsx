import { Modal } from "../src/components/ui/modal";
import { Slider } from "../src/components/ui/slider/slider";

import { LoginForm } from "./components/auth/login-form/login-form";
import { Button } from "./components/ui/button";
import { TextField } from "./components/ui/text-field";
import { Typography } from "./components/ui/typography";

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
      <Modal />
    </div>
  );
}
