import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "./styles/index.scss";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";

import { store } from "../src/app/store";
import { LoginForm } from "../src/components/auth/login-form/login-form";

import { App } from "./app/App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
