import {ComponentProps, FC} from "react";
import {clsx} from "clsx";
import s from "./table.module.scss"

export type RootProps = ComponentProps<'table'>


export const Root: FC<RootProps> = ({className,...rest}) => {
    const classNames = {
        table: clsx(className, s.table)
    }

}


export const Table = () => {
    return ()

}