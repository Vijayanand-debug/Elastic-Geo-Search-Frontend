import { createBrowserRouter } from "react-router";
import { SearchLayout } from "../layouts/SearchLayout";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <SearchLayout />
            }

        ]
    }
]);

