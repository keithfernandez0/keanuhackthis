export default function CrimePopup({ crime, onClose }) {
    return (
      <div className="absolute bg-white shadow-md p-4 rounded-xl">
        <h3 className="font-bold">{crime.type}</h3>
        <p><strong>Severity:</strong> {crime.severity}</p>
        <p><strong>Location:</strong> {crime.location}</p>
        <p><strong>Description:</strong> {crime.description}</p>
        <button onClick={onClose} className="bg-red-500 text-white p-1 rounded">Close</button>
      </div>
    );
  }
  