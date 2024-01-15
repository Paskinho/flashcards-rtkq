import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSignUpMutation } from "../../services/auth/auth";
import { LoginArgs } from "../../services/auth/types";
import {Page} from "../../components/ui/page";

export const signUpPage = () => {
  const [registration] = useSignUpMutation();
  const navigate = useNavigate();
  const handleRegistration = async (data: LoginArgs) => {
    return registration(data)
      .unwrap()
      .then(() => {
        toast.success("Signed up successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.data.message));
  };

  return (
      <Page flex>
          <SignUp onSubmit={handleRegistration}/>
      </Page>
  )

};
