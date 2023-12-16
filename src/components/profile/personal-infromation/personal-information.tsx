import { Card } from "../../../../src/components/ui/card";
import { Typography } from "../../../../src/components/ui/typography";

import s from "./personal-information.module.scss";

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
    <Card className={s.card}>
      <Typography variant={"large"}>Personal Information</Typography>
      <div>
        <div>
          <img
            alt={"avatar"}
            src={
              "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            }
          />
        </div>
      </div>
    </Card>
  );
};
