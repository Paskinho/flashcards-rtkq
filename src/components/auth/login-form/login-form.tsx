import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { TextField } from "../../ui/text-field";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(3, "Password must be at least 3 characters"),
  rememberMe: z.literal(true, { invalid_type_error: "Please checkbox" }),
});

type FormValues = z.infer<typeof loginSchema>;

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
      <TextField
        {...register("email")}
        label={"email"}
        errorMessage={errors.email?.message}
      />
      <TextField
        {...register("password")}
        label={"password"}
        errorMessage={errors.password?.message}
      />
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
