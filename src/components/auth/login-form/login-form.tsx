import { useForm } from "react-hook-form";

import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { TextField } from "../../ui/text-field";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
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
      {/*<Checkbox {...register("rememberMe")} label={"remember me"} /> ОТРИСОВАТЬ!!!*/}

      <Button type="submit">Submit</Button>
    </form>
  );
};
