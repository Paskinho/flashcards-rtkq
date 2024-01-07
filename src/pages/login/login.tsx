import { SignIn } from "../../components/auth/sign-in/sign-in.tsx";
import { Page } from "../../components/ui/page";

export const Login = () => {
  return (
    <Page>
      <SignIn
        onSubmit={() => {
          return alert("1");
        }}
      />
    </Page>
  );
};
