import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import {clsx} from 'clsx'


export const Toggle = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
    >(({className, ...props}, ref)) => {
    const classNames = {
        root: clsx(s.root)
    }

};
