import { Outlet } from "react-router-dom";

import { useGetMeQuery, useLogoutMutation } from "../../services/auth/auth.ts";

export const Layout = () => {
  const { data } = useGetMeQuery();
  const [logout] = useLogoutMutation();

  return (
    <div>
      <Outlet />
    </div>
  );
};
