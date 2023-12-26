import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant={"large"} className={s.title}>
          Sign In
        </Typography>
      </Card>
    </>
  );
};
