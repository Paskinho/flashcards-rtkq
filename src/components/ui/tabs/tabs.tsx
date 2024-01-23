import * as TabsPrimitive from '@radix-ui/react-tabs'
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";
import * as clsx from "clsx";
import s from './tabs.module.scss'


const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<ElementRef<typeof TabsPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.List>
    >(({className, ...props}, ref)=> {
        <TabsPrimitive.List className={clsx(s.list, className)} ref={ref} {...props}/>
})

TabsList.displayName = TabsPrimitive.List.displayName