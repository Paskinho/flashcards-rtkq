import {Link, useNavigate} from "react-router-dom";
import s from './header.module.scss'


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
                <Link to={'/'}>
        <Logo/>
                </Link>
            </div>
        </header>
    );
};
