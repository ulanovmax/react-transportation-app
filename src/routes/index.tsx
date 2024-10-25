import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import RequestsPage from "../pages/RequestsPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,

        children: [
            {
                path: "/requests",
                element: <RequestsPage />
            }
        ],
        errorElement: <NotFoundPage />
    },

    {
        path: "/login",
        element: <LoginPage />
    }
])

export default router