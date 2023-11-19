import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "./styles/index.scss";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "src/components/auth/login-form/login-form";

import { App } from "./App.tsx";

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
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
