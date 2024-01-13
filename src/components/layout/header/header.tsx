import {Link, useNavigate} from "react-router-dom";
import s from './header.module.scss'
import Logo from "../../../assets/icons/logo";
import {Dropdown, DropdownItem, DropdownItemWithIcon} from "../../ui/dropdown";
import {Typography} from "../../ui/typography";
import {Avatar} from "../../ui/avatar";
import {Button} from "../../ui/button";
import PersonalOutline from "../../../assets/icons/personal-outline";
import Logout from "../../../assets/icons/logout";
import Avatar1 from '../../../assets/photo/Avatar.jpg'


export type HeaderProps = {
    isAuth: boolean;
    userInfo?: {
        email: string,
        avatar: string;
        name: string
    } | null
    onSignOut?: () => void
}

export const Header = ({isAuth, userInfo, onSignOut}: HeaderProps) => {
    const navigate = useNavigate()

    return (
        <header className={s.header}>
            <div>
                <Link to={'/'} className-={s.logoLink}>
                    <Logo/>
                </Link>
            </div>
            {!isAuth && (
                <Dropdown
                    trigger={
                        <button className={s.userMenuTrigger}>
                            <Typography variant={'subtitle1'} className={s.userName}>
                                Uladzislau
                                {/*{userInfo?.name}*/}
                                <Avatar src={Avatar1} name={userInfo?.name}/>
                            </Typography>
                        </button>
                    }
                >
                    <DropdownItem>
                        <div className={s.userInfoContainer}>
                            <Avatar src={Avatar1}/>
                            <div className={s.userDetails}>
                                <Typography variant={'subtitle2'}>{userInfo?.name}</Typography>
                                <Typography variant={'caption'} className={s.userEmail}>{userInfo?.email}</Typography>
                            </div>
                        </div>
                    </DropdownItem>
                    <DropdownItemWithIcon
                    icon={<PersonalOutline/>}
                    text={"Profile"}
                    onSelect={()=> navigate('profile')}
                    />
                    <DropdownItemWithIcon
                    icon={<Logout/>}
                    text={'Sign Out'}
                    onSelect={onSignOut}
                    />
                </Dropdown>
            )}
            {isAuth && <Button variant="primary">Sign In</Button>}
        </header>
    );
};

//уточнить по src Avatar userInfo?.avatar = должно быть так