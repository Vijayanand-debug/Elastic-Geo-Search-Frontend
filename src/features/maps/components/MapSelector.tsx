import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const defaultCenter = {
    lat: 53.376813280761745,
    lng: -6.331608142528932
}

const containerStyle = {
    width: "100%",
    height: "400px"

}

export default function MapSelector() {

    const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
        null
    );

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_MAPS_API}>

            <GoogleMap
                center={defaultCenter}
                mapContainerStyle={containerStyle}
                zoom={12}
            >
                {marker && <Marker position={marker} />}
            </GoogleMap>

        </LoadScript>
    )
}