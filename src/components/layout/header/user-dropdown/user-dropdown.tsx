import {ComponentPropsWithoutRef} from "react";

export type UserDropDownProps = {
    avatar: null | string
    email: string
    onLogout: ComponentPropsWithoutRef<<typeof DropDownMenuItem>['onSelect']
}

export const UserDropdown = () => {

}