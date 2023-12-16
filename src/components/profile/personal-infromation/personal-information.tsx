import { Card } from "../../../../src/components/ui/card";
import { Typography } from "../../../../src/components/ui/typography";

type PersonalInformationProps = {
  email: string;
  avatar: string;
  name: string;
  onLogout: () => void;
  onAvatarChange: (newAvatar: string) => void;
  onNameChange: (newName: string) => void;
};

export const PersonalInformation = ({
  email,
  avatar,
  name,
  onLogout,
  onAvatarChange,
  onNameChange,
}: PersonalInformationProps) => {
  return (
    <Card>
      <Typography variant={"large"}>Personal Information</Typography>
      <Typography variant={"large"}>Personal Information</Typography>
      <Typography variant={"large"}>Personal Information</Typography>
    </Card>
  );
};
