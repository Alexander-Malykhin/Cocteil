import {createBrowserRouter} from "react-router";
import HomePage from "@pages/HomePage.jsx";

export const router = createBrowserRouter([
    {
        id: 1,
        path: '/',
        Component: HomePage
    }
])
