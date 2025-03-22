"use client";

import { GoogleMap } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

if (!googleMapsApiKey) {
  throw new Error("Google Maps API key is not defined");
}

export default function Home() {
  return (
    <div>
      <h3>HELLO WORLD</h3>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap />
      </LoadScript>
    </div>
  );
}
