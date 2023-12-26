import { z } from "zod";

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
  return <></>;
};
