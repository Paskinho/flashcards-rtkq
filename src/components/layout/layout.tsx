import { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import { useGetMeQuery, useLogoutMutation } from "../../services/auth/auth.ts";

import { Header } from "./header/heade.tsx";

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery();
  // const [logout] = useLogoutMutation();
  const isAuthenticated = !isError && !isLoading;

  if (isLoading) {
    return <div>Is Loading</div>;
    // return <Spinner fullScreen />; добавить в ui spinner
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export type LayoutPrimitiveProps = { children: ReactNode } & HeaderProps;

export const LayoutPrimitive = ({
  children,
  ...headerProps
}: LayoutPrimitiveProps) => {
  return (
    <div className={s.layout}>
      <Header {...headerProps} />
      <div className={s.content}>{children}</div>
    </div>
  );
};
