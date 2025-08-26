import { Outlet } from "react-router";
import LocationSelector from "@/features/location/components/LocationSelector";

import MapSelector from "@/features/maps/components/MapSelector";

export function SearchLayout() {
    return (
        <>
            <div className="flex flex-col items-center md:flex-row bg-[#1F2937] shadow-lg shadow-[#1F2937]">
                <aside><LocationSelector /></aside>
                <section><Outlet /></section>
            </div>


            <MapSelector />
        </>

    )
}