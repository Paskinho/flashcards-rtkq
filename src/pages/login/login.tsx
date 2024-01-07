import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SignIn } from "../../components/auth/sign-in/sign-in.tsx";
import { Page } from "../../components/ui/page";
import { useLoginMutation } from "../../services/auth/auth.ts";
import { LoginArgs } from "../../services/auth/types.ts";

export const Login = () => {
  const [signIn] = useLoginMutation();
  const navigate = useNavigate();
  const handleLogin = async (data: LoginArgs) => {
    try {
      await signIn(data).unwrap();
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data.message ?? "Could not sign in");
    }
  };

  return (
    <Page flex>
      <SignIn onSubmit={handleLogin} />
    </Page>
  );
};
