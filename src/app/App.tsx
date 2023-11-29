import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "src/app/store";
import { LoginForm } from "src/components/auth/login-form/login-form";

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
    // path: "login",
    // element: <LoginForm />,
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider routerProvider={router} />
      {/*<Provider store={store}></Provider>*/}
    </div>
  );
}
