import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CrimePopup from "./CrimePopup";

const mapContainerStyle = { width: "100%", height: "100vh" };
const defaultCenter = { lat: 40.7128, lng: -74.006 }; // New York City as default

export default function CrimeMap({ crimes }) {
  const [selectedCrime, setSelectedCrime] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={defaultCenter}>
        {crimes.map((crime, index) => (
          <Marker
            key={index}
            position={{ lat: crime.coordinates.lat, lng: crime.coordinates.lng }}
            icon={`/assets/markers/${crime.type.toLowerCase()}.png`}
            onClick={() => setSelectedCrime(crime)}
          />
        ))}
        {selectedCrime && <CrimePopup crime={selectedCrime} onClose={() => setSelectedCrime(null)} />}
      </GoogleMap>
    </LoadScript>
  );
}
