import { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import { useGetMeQuery, useLogoutMutation } from "../../services/auth/auth.ts";
import { Spinner } from "../ui/spinner";

import { Header } from "./header/header.tsx";
import s from "./layout.module.scss";

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery();
  // const [logout] = useLogoutMutation();
  const isAuthenticated = !isError && !isLoading;

  if (isLoading) {
    // return <div>Is Loading</div>;

    return <Spinner fullScreen />;
  }

  return (
    <LayoutPrimitive
      avatar={data?.avatar ?? null}
      email={data?.email ?? ""}
      isLoggedIn={isAuthenticated}
      onLogout={() => {}}
      userName={data?.name ?? ""}
    >
      <Outlet context={{ isAuthenticated } satisfies AuthContext} />
    </LayoutPrimitive>
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
