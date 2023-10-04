import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { TextField } from "../../ui/text-field";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const {
    field: { value, onChange },
  } = useController({
    name: "rememberMe",
    control,
    defaultValue: false,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("email")} label={"email"} />
      <TextField {...register("password")} label={"password"} />
      {/*<Checkbox*/}
      {/*  onCheckedChange={onChange}*/}
      {/*  checked={value}*/}
      {/*  label={"remember me"}*/}
      {/*/>{" "}*/}
      {/*ОТРИСОВАТЬ!!!*/}
      <Button type="submit">Submit</Button>
    </form>
  );
};
