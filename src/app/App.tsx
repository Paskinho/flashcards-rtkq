import React, {useState} from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Button} from "../../src/components/ui/button";
import {Cards} from "../../src/pages/cards";
import {Profile} from "../../src/pages/profile/profile";
import {RecoverPassword} from "../components/auth/recover-password/recover-password.tsx";
import {Layout} from "../components/layout/layout.tsx";
import {Login} from "../pages/login";
import {SignUpPage} from "../pages/sign-up/signUpPage";
import {NewPassword} from "../components/auth/new-password";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            // element: <ProtectedRoutes />,
            // children: [
            {
                path: "/",
                element: <div> Hello!</div>,
            },
            {
                path: "cards", //"cards/:deckId"
                element: <Cards/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "sign-up",
                element: <SignUpPage/>,
            },
            {
                path: "recover-password",
                element: <RecoverPassword onSubmit={() => {
                }}/>,
            },
            {
                path: "new-password",
                element: <NewPassword onSubmit={() => {
                }}/>,
            },
        ],
    },
]);

export function App() {
    const handleThemeChanged = useHandleThemeChanged();

    return (
        <div>
            {/*<Cards />*/}

            {/*<Login />*/}

            <RouterProvider router={router}/>
            {/*<Profile />*/}
            <Button
                onClick={handleThemeChanged}
                // style={{ position: "fixed", top: "50%" }}
            >
                Change Theme
            </Button>
            {/*<Provider store={store}></Provider>*/}
        </div>
    );
}

function ProtectedRoutes() {
    // const { data, isLoading } = useGetMeQuery();
    //
    // if (isLoading) return <div>Loading...</div>;
    //
    // return data ? <Outlet /> : <Navigate to="/login" />;
}

function useHandleThemeChanged() {
    const [state, setState] = useState(false);

    return () => {
        document.body.classList.toggle("dark-mode", state);
        setState(!state);
    };
}
