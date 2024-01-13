import { z } from "zod";

import { Card } from "../../ui/card";

const schema = z.object({
  email: z.string().email("Invalid email address").nonempty("Enter email"),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: FormValues) => void;
};

export const RecoverPassword = () => {
  return <Card></Card>;
};
