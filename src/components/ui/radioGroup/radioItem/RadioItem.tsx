import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from "react";
import {Radio} from "@radix-ui/react-radio-group";
import cn from 'classnames'
import s from './RadioItem.module.scss'
import {Typography} from "../../typography";

export type RadioItemProps = {
    title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, RadioItemProps>(
    ({value, title, disabled}, ref): JSX.Element => {
     const classNames = {
         label: cn(s.label, disabled && s.disabled),
         item: s.item,
         indicator: s.indicator,
         title: cn(s.title, disabled && s.disabledTitle)
     }

     return (
         <Typography className={classNames.label} as={'label'}>
             <Radio.Item ref={ref} className={classNames.item} value={value} disabled={disabled}>
                 <Radio.Indicator classname={classNames.indicator}/>
             </Radio.Item>
             <Typography className={classNames.title} as={'span'}>
                 {title}
             </Typography>

         </Typography>
     )

    }
)

//уточнить по variant у Typography