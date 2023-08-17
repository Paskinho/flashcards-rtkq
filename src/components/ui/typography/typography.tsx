import {
  ComponentProps,
  ElementType,
  JSXElementConstructor,
  ReactNode,
} from "react";

import s from "./typography.module.css";

export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, "ref">
  : never;
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type TypographyProps = {
  children: ReactNode;
  component?: Ttag;
  className?: string;
  mb?: number | string;
  mt?: number | string;
  mr?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
};

const createTypographyComponent = () => {
  return ({ children, component, className, style, mr, ml, mt, mb, mx, my, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    const styles = {
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(mx && { marginRight: mx, marginLeft: mx }),
      ...(my && { marginTop: my, marginBottom: my }),
      ...style,
    }

    return (
        <Component className={classNames} style={styles} {...rest}>
          {children}
        </Component>
    )
  }
}
};

export const Typography = () => {
  return <text>123</text>;
};
