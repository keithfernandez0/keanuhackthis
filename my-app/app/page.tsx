"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import CrimeForm from "./components/CrimeForm"

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

if (!googleMapsApiKey) {
  throw new Error("Google Maps API key is not defined");
}

export default function Home() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
  });

  const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194 }), []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        center={center}
        zoom={10}
      />
      <CrimeForm onClose={()=> console.log("close")}/>
    </div>
  );
}