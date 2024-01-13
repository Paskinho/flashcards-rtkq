import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card } from "../../ui/card";
import { Typography } from "../../ui/typography";

const schema = z.object({
  email: z.string().email("Invalid email address").nonempty("Enter email"),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: FormValues) => void;
};

export const RecoverPassword = (props: Props) => {
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmitted = handleSubmit(onsubmit);

  return (
    <>
      <DevTool control={control} />
      <Card>
        <Typography varian={"large"}>Recovery Password</Typography>
      </Card>
    </>
  );
};
