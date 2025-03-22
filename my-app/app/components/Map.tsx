// components/Map.tsx
import NEXT_PUBLIC_GOOGLE_MAPS_API_KEY from ".env.local"
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ setSelectedCrime }: { setSelectedCrime: (crime: any) => void }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      if (!mapRef.current) return;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10,
      });

      // Example marker
      const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map,
        icon: "/icons/skull.png",
      });

      marker.addListener("click", () => {
        setSelectedCrime({ type: "Burglary", severity: "Medium", address: "McDonald's 45th St, Union", description: "There's a crackhead robbing people!!!", timestamp: "30 mins" });
      });
    });
  }, []);// components/CrimeMapUI.tsx
  import React, { useState } from "react";
  import dynamic from "next/dynamic";
  import CrimeForm from "./CrimeForm";
  import CrimePopUp from "./CrimePopUp";
  
  const Map = dynamic(() => import("./Map"), { ssr: false });
  
  const CrimeMapUI: React.FC = () => {
    const [selectedCrime, setSelectedCrime] = useState(null);
    const [showForm, setShowForm] = useState(false);
  
    return (
      <div className="relative h-screen w-full">
        {/* Search Bar */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2 flex items-center">
          <input type="text" placeholder="Search City..." className="outline-none px-2 w-60" />
          🔍
        </div>
  
        {/* Map Component */}
        <Map setSelectedCrime={setSelectedCrime} />
  
        {/* Crime Form */}
        {showForm && <CrimeForm onClose={() => setShowForm(false)} />}
  
        {/* Crime Popup */}
        {selectedCrime && <CrimePopUp crime={selectedCrime} onClose={() => setSelectedCrime(null)} />}
  
        {/* Add Crime Button */}
        <button
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md"
          onClick={() => setShowForm(true)}
        >
          + Add Crime
        </button>
      </div>
    );
  };
  
  export default CrimeMapUI;
  

  return <div ref={mapRef} className="h-screen w-full" />;
};

export default Map;
