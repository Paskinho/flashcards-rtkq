import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ControlledCheckbox } from "../../controlled/controlled-checkbox/controlled-checkbox";
import { Button } from "../../ui/button";
import { TextField } from "../../ui/text-field";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(3, "Password must be at least 3 characters"),
  rememberMe: z.literal(true, {
    errorMap: () => ({
      message: "Please check tre box",
    }),
  }),
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
      {/*<ControlledCheckbox control={control} name={"remember me"} label={"Remember me"} />*/}
      <Button type="submit">Submit</Button>
    </form>
  );
};
