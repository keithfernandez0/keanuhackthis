import { useState } from "react";
import CrimeForm from "../components/CrimeForm";
import CrimeMap from "../components/CrimeMapUI";

export default function Home() {
  const [crimes, setCrimes] = useState([]);

  const addCrime = (newCrime) => {
    const randomCoords = { lat: 40.71 + Math.random() * 0.05, lng: -74.00 + Math.random() * 0.05 };
    setCrimes([...crimes, { ...newCrime, coordinates: randomCoords }]);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <CrimeForm onSubmit={addCrime} />
      </div>
      <div className="w-2/3">
        <CrimeMap crimes={crimes} />
      </div>
    </div>
  );
}
