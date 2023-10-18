import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(() => {
  return;
});
