import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from "react";
import {RadioItem, RadioItemProps} from "./radioItem";
import * as Radio from '@radix-ui/react-radio-group'
import cn from 'classnames'
import s from './RadioGroup.module.scss'


export type RadioGroupProps = {options: RadioItemProps[]}
    & ComponentPropsWithoutRef<typeof Radio.Root>


export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
    ( {options, className, ...restProps}, ref
): JSX.Element => {
   const rootClassName = cn(s.root, className)
        return (
            <Radio.Root ref={ref} className={rootClassName} {...restProps}>
                {options.map(item => (
                    <RadioItem key={item.value} {...item}/>
                ))}
            </Radio.Root>
        )
}
)