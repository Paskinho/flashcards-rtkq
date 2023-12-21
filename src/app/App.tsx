import { useState } from "react";

import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { store } from "../../src/app/store";
import { LoginForm } from "../../src/components/auth/login-form/login-form";
import { Button } from "../../src/components/ui/button";
import { Cards } from "../../src/pages/cards";
import { Profile } from "../../src/pages/profile/profile";

const router = createBrowserRouter([
  {
    // path: '/',
    // element: ,
    // children: [
    //
    // ]
    path: "/",
    element: <div>Hello my friend!</div>,
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: "cards",
    element: <Cards />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

export function App() {
  const handleThemeChanged = useHandleThemeChanged();

  return (
    <div>
      {/*<Cards />*/}
      <Profile />
      {/*<Button*/}
      {/*  onClick={handleThemeChanged}*/}
      {/*  style={{ position: "fixed", top: "50%" }}*/}
      {/*>*/}
      {/*  Change Theme*/}
      {/*</Button>*/}
      <RouterProvider routerProvider={router} />
      {/*<Provider store={store}></Provider>*/}
    </div>
  );
}

function useHandleThemeChanged() {
  const [state, setState] = useState(false);

  return () => {
    document.body.classList.toggle("dark-mode", state);
    setState(!state);
  };
}
