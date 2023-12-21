import { Card } from "../../../../src/components/ui/card";
import { Typography } from "../../../../src/components/ui/typography";
import Camera from "../../../assets/icons/camera";
import Edit from "../../../assets/icons/edit.tsx";
import { Button } from "../../ui/button";

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
  const handleNameChanged = () => {
    onNameChange("New name");
  };

  const handleLogout = () => {
    onLogout();
  };

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
          <button>
            <Camera />
          </button>
        </div>
      </div>
      <div className={s.nameWithEditButton}>
        <Typography variant="h1" className={s.name}>
          {name}
        </Typography>
        <button className={s.editNameButton} onClick={handleNameChanged}>
          <Edit />
        </button>
      </div>
      <Typography variant={"body2"} className={s.email}>
        {email}
      </Typography>
      <div>
        <Button variant={"secondary"} onClick={handleLogout}>
          <Logout />
        </Button>
      </div>
    </Card>
  );
};
