import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from "react";
import {Radio} from "@radix-ui/react-radio-group";
import cn from 'classnames'
import s from './RadioItem.module.scss'

export type RadioItemProps = {
    title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, RadioItemProps>(
    ({value, title, disabled}, ref): JSX.Element => {
     const classNames = {
         label: cn(s.label, disabled && s.disabled)
     }
    }
)