import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ControlledTextField } from "../../controlled/controlled-text-field";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Typography } from "../../ui/typography";
import s from "./recover-password.module.scss"
import {Page} from "../../ui/page";

const schema = z.object({
  email: z.string().email("Invalid email address").nonempty("Enter email"),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: FormValues) => void;
};

export const RecoverPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmitted = handleSubmit(onSubmit);

  return (
    <>
      <DevTool control={control} />
      <Page flex>
      <Card className={s.card}>
        <Typography varian={"large"} className={s.title}>
          Forgot you password?
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              name={"email"}
              control={control}
              placeholder={"Email"}
            />
            <Typography variant={"body2"}>
              Enter your email address and we will send you further instructions
            </Typography>
            <Button>Send Instructions</Button>
          </div>
        </form>
      </Card>
      </Page>
    </>
  );
};
