import "@/app/App.css";

import { RouterProvider } from "react-router";
import { router } from "@/app/router/router";

function App() {

  return (
    <>
      {/* <div className="flex flex-col items-center md:flex-row bg-[#1F2937] shadow-lg shadow-[#1F2937]">
        <LocationSelectorComponent />
        <SearchComponent />
      </div> */}

      <RouterProvider router={router} />


    </>
  )
}

export default App
