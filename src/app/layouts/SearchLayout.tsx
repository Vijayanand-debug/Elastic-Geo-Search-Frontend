import { Outlet } from "react-router";
import LocationSelector from "@/features/location/components/LocationSelector";
import SearchComponent from "@/features/elasticSearch/components/SearchComponent";


export function SearchLayout() {
    return (
        <>
            <div className="flex flex-col items-center md:flex-row bg-[#1F2937] shadow-lg shadow-[#1F2937]">
                <LocationSelector />
                <SearchComponent />
            </div>
            <section><Outlet /></section>

        </>

    )
}