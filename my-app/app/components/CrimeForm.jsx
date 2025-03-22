// CrimeForm.jsx

import { useState } from "react";

const crimeCategories = [
  "Robbery", "Assault", "Theft", "Arson", "Rape", "Fraud", "Larceny", "Murder", "Substance Abuse"
];

const severityLevels = ["Low", "Medium", "High"];

export default function CrimeForm({ onSubmit }) {
  const [crime, setCrime] = useState({
    name: "",
    type: "",
    severity: "",
    description: "",
    datetime: "",
  });

  const handleChange = (e) => {
    setCrime({ ...crime, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(crime);
    setCrime({ name: "", type: "", severity: "", description: "", datetime: "" });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold">Report a Crime</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name (optional)"
          value={crime.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select name="type" value={crime.type} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Crime Type</option>
          {crimeCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select name="severity" value={crime.severity} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Severity</option>
          {severityLevels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <input
          type="datetime-local"
          name="datetime"
          value={crime.datetime}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Crime description"
          value={crime.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
