import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import s from "./page.module.scss";

type PageProps = PropsWithChildren<{
  mt?: string | number;
  flex?: boolean;
}>;

export const Page = ({ children, mt = "36px", flex = false }: PageProps) => {
  return (
    <div className={clsx(s.content, flex && s.flex)} style={{ marginTop: mt }}>
      {children}
    </div>
  );
};
