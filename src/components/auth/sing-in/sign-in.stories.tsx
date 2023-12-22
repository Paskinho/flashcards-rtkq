import { z } from "zod";

export default {};
const schema = z.object({
  email: z.string().email("Invalid email address").nonempty("Enter email"),
  password: z.string().nonempty("Enter password"),
  rememberMe: z.boolean().optional(),
});

export const SignIn = () => {
  return <div>1</div>;
};
