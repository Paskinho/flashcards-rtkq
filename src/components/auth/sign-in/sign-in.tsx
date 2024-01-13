import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { ControlledCheckbox } from "../../controlled/controlled-checkbox";
import { ControlledTextField } from "../../controlled/controlled-text-field";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Typography } from "../../ui/typography";

import s from "./sign-in.module.scss";

export default {};
const schema = z.object({
  email: z.string().email("Invalid email address").nonempty("Enter email"),
  password: z.string().nonempty("Enter password"),
  rememberMe: z.boolean().optional(),
});

type FormType = z.infer<typeof schema>;

type SignInProps = {
  onSubmit: (data: FormType) => void;
};

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmitted = handleSubmit(onSubmit);

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant={"large"} className={s.title}>
          Sign In
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              name={"email"}
              control={control}
              placeholder={"Email"}
              label={"Email"}
            />
            <ControlledTextField
              name={"password"}
              control={control}
              placeholder={"Password"}
              label={"Password"}
              type={"password"}
            />
            <ControlledCheckbox
              className={s.checkbox}
              name={"rememberMe"}
              control={control}
              label={"Remember Me"}
              position={"left"}
            />
          </div>
          <Typography
            variant={"body2"}
            as={Link}
            to={"/recover-password"}
            className={s.recoverPasswordLink}
          >
            Forgot Password?
          </Typography>
          <Button className={s.button} fullWidth type={"submit"}>
            Sign In
          </Button>
        </form>
        <Typography className={s.caption} variant={"body2"}>
          Don't have an account?
        </Typography>
        <Typography variant={"link1"} to="/sign-up" className={s.signUpLink}>
          Sign In
        </Typography>
      </Card>
    </>
  );
};
