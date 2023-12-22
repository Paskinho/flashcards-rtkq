import { PersonalInformation } from "../../../src/components/profile/personal-infromation";
import { Page } from "../../../src/components/ui/page";
import { useGetMeQuery } from "../../services/auth/auth";

export const Profile = () => {
  // const { data } = useGetMeQuery();
  //
  // if (!data) return <div>loading...</div>;

  return (
    <Page flex>
      <PersonalInformation
        // email={data.email}
        // avatar={data.avatar}
        // name={data.name}
        email={"data.email"}
        avatar={"data.avatar"}
        name={"data.name"}
        onLogout={() => {}}
        onAvatarChange={() => {}}
        onNameChange={() => {}}
      />
    </Page>
  );
};
