// components/CrimeForm.tsx
import React, { useState } from "react";

const CrimeForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", type: "", severity: "Low", address: "", location: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Crime:", formData);
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Crime</h2>

        {/* Input Fields */}
        <input type="text" placeholder="Name..." className="w-full border p-2 rounded mb-2" />
        <input type="text" placeholder="Type..." className="w-full border p-2 rounded mb-2" />
        <input type="text" placeholder="Address..." className="w-full border p-2 rounded mb-2" />
        <input type="text" placeholder="Location..." className="w-full border p-2 rounded mb-2" />
        <textarea placeholder="Description..." className="w-full border p-2 rounded mb-2"></textarea>

        {/* Severity Selector */}
        <div className="flex gap-2 mb-4">
          <label><input type="radio" name="severity" value="Low" checked /> Low</label>
          <label><input type="radio" name="severity" value="Medium" /> Medium</label>
          <label><input type="radio" name="severity" value="High" /> High</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CrimeForm;
