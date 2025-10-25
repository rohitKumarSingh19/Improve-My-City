import React from "react";

const ComplaintCard = ({ complaint }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">
        {complaint.title}
      </h3>
      <p className="text-gray-600 mb-2">{complaint.description}</p>
      <p className="text-sm text-gray-500 mb-2">
        <span className="font-semibold">Location:</span> {complaint.location}
      </p>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          complaint.status === "resolved"
            ? "bg-green-100 text-green-700"
            : complaint.status === "in-progress"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {complaint.status}
      </span>
    </div>
  );
};

export default ComplaintCard;
