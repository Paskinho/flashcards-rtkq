import { Card } from "../../../../src/components/ui/card";
import { Typography } from "../../../../src/components/ui/typography";
import Camera from "../../../assets/icons/camera";
import Edit from "../../../assets/icons/edit.tsx";
import Logout from "../../../assets/icons/logout.tsx";
import { Button } from "../../ui/button";
import Avatar from '../../../assets/photo/Avatar.jpg'

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
  const handleAvatarChanged = () => {
    onAvatarChange("new Avatar");
  };

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
              className={s.avatar}
            alt={"avatar"}
            src={Avatar}
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
          SignOut
        </Button>
      </div>
    </Card>
  );
};
