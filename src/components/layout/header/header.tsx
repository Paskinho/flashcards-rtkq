import {Link, useNavigate} from "react-router-dom";
import s from './header.module.scss'
import Logo from "../../../assets/icons/logo";
import {Dropdown} from "../../ui/dropdown";
import {Typography} from "../../ui/typography";


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
            {isAuth && (
                <Dropdown
                    trigger={
                        <button className={s.userMenuTrigger}>
                            <Typography variant={'subtitle1'} className={s.userName}>
                                {userInfo?.name}
                            </Typography>
                        </button>
                    }
                >

                </Dropdown>
            )}
        </header>
    );
};
