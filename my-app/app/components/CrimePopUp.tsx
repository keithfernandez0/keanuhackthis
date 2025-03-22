// components/CrimePopup.tsx
import React from "react";

const CrimePopup = ({ crime, onClose }: { crime: any; onClose: () => void }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 w-80 shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✖</button>

        <h2 className="text-lg font-semibold">{crime.type}</h2>
        <p className={`px-2 py-1 inline-block rounded-full text-white ${crime.severity === "High" ? "bg-red-500" : crime.severity === "Medium" ? "bg-yellow-500" : "bg-green-500"}`}>
          {crime.severity}
        </p>
        <p className="text-blue-600 underline cursor-pointer">{crime.address}</p>
        <p className="italic mt-2">{crime.description}</p>
        <p className="text-sm text-gray-500 mt-2">{crime.timestamp} ago</p>
      </div>
    </div>
  );
};

export default CrimePopup;
