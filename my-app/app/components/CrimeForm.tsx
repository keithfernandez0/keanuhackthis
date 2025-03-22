import React, { useState } from "react";

const CrimeForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    severity: "Low",
    address: "",
    location: "",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false); // State to track form visibility

  // Generalize event type to handle both input and textarea elements
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSeverityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      severity: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Crime:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/crime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Crime data successfully submitted");
        onClose();
      } else {
        console.error("Error submitting crime data");
      }
    } catch (error) {
      console.error("Error submitting crime data:", error);
    }
  };

  return (
    <div className=" hidden absolute inset-0 bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add Crime</h2>
          {/* Plus Sign for Toggling Form */}
          <button
            className="text-2xl text-gray-800"
            onClick={() => setIsFormVisible(!isFormVisible)}
          >
            {isFormVisible ? "-" : "+"}
          </button>
        </div>

        {/* Conditionally render the form fields based on visibility */}
        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            {/* Input Fields */}
            <input
              type="text"
              name="name"
              placeholder="Name..."
              className="w-full border border-gray-600 text-gray-800 p-2 rounded mb-2"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="type"
              placeholder="Type..."
              className="w-full border border-gray-600 text-gray-800 p-2 rounded mb-2"
              value={formData.type}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address..."
              className="w-full border border-gray-600 text-gray-800 p-2 rounded mb-2"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location..."
              className="w-full border border-gray-600 text-gray-800 p-2 rounded mb-2"
              value={formData.location}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description..."
              className="w-full border border-gray-600 text-gray-800 p-2 rounded mb-2"
              value={formData.description}
              onChange={handleInputChange}
            />

            {/* Severity Selector */}
            <div className="flex gap-2 mb-4">
              <label className="text-gray-800">
                <input
                  type="radio"
                  name="severity"
                  value="Low"
                  checked={formData.severity === "Low"}
                  onChange={handleSeverityChange}
                />{" "}
                Low
              </label>
              <label className="text-gray-800">
                <input
                  type="radio"
                  name="severity"
                  value="Medium"
                  checked={formData.severity === "Medium"}
                  onChange={handleSeverityChange}
                />{" "}
                Medium
              </label>
              <label className="text-gray-800">
                <input
                  type="radio"
                  name="severity"
                  value="High"
                  checked={formData.severity === "High"}
                  onChange={handleSeverityChange}
                />{" "}
                High
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-400 px-4 py-2 rounded text-gray-800"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CrimeForm;
