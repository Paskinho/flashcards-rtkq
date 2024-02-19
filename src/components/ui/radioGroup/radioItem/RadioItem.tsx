import {ComponentPropsWithoutRef} from "react";
import {Radio} from "@radix-ui/react-radio-group";


export type RadioItemProps = {
    title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = () => {

}