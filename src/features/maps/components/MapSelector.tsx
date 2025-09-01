import AutocompleteLayout from "@/app/layouts/AutocompleteLayout";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const defaultCenter = {
    lat: 53.376813280761745,
    lng: -6.331608142528932
}

const containerStyle = {
    width: "100%",
    height: "100vh"

}


export default function MapSelector() {
    // caching the map loader api call to avoid reloading it on every call
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API,
    })

    const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
        null
    );

    const mapOptions = {
        zoomControl: false,
        cameraControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: "none",
        zoom: 14,
        maxZoom: 14,
        minZoom: 14
    }

    // set a preloader here
    if (!isLoaded) return <p>Loading map... </p>


    return (
        <>
            <section className="fixed top-0 inset-x-0 bg-[#1F2937] shadow-lg shadow-[#1F2937] p-5 z-99">
                <AutocompleteLayout />
            </section>

            <GoogleMap
                center={defaultCenter}
                mapContainerStyle={containerStyle}
                options={mapOptions}
            >
                {marker ? <Marker position={marker} /> : <Marker position={defaultCenter} />}
            </GoogleMap>
        </>

    )
}