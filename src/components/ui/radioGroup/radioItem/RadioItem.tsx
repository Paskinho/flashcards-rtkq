import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from "react";
import {Radio} from "@radix-ui/react-radio-group";


export type RadioItemProps = {
    title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, RadioItemProps>(
    ({value, title, disabled}, ref): JSX.Element
) => {

}