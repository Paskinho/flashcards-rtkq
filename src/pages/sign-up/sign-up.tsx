import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSignUpMutation } from "../../services/auth/auth";
import { LoginArgs } from "../../services/auth/types";
import {Page} from "../../components/ui/page";
import {SignUp} from "../../components/auth/sign-up";

export const SignUpPage = () => {
  const [registration] = useSignUpMutation();
  const navigate = useNavigate();
  const handleRegistration = async (data: LoginArgs) => {
    return registration(data)
      .unwrap()
      .then(() => {
          debugger
        toast.success("Signed up successfully");
        navigate("/login");
      })
      .catch((err) => toast.error(err.data.message));
  };

  return (
      <Page flex>
          <SignUp onSubmit={handleRegistration}/>
      </Page>
  )

};
