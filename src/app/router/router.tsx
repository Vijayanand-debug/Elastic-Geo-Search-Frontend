import { createBrowserRouter } from "react-router";
import { SearchLayout } from "../layouts/SearchLayout";
import { RootLayout } from "../layouts/RootLayout";
import { SearchComponent } from "@/features/location/components/SearchComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <SearchLayout />,
                children: [{ index: true, element: <SearchComponent /> }]
            }

        ]
    }
]);

