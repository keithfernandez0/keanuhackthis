// components/CrimeMapUI.tsx
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
