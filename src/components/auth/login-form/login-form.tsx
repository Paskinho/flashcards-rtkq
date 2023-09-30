import { useForm } from "react-hook-form";
import { Checkbox } from "src/components/ui/checkbox/checkbox";

import { Button } from "../../ui/button";
import { TextField } from "../../ui/text-field";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("email")} label={"email"} />
      <TextField {...register("password")} label={"password"} />
      <Checkbox {...register("rememberMe")} label={"remember me"} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
