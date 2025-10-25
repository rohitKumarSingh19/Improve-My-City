import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await axiosInstance.get("/complaints");
      setComplaints(res.data);
    };
    fetchAll();
  }, []);

  const updateStatus = async (id, status) => {
    await axiosInstance.patch(`/complaints/${id}`, { status });
    setComplaints((prev) =>
      prev.map((c) => (c._id === id ? { ...c, status } : c))
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        Admin Dashboard
      </h2>
      <table className="w-full border shadow-md bg-white rounded-xl">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c._id} className="border-b hover:bg-gray-50">
              <td className="p-3">{c.title}</td>
              <td className="p-3">{c.location}</td>
              <td className="p-3">{c.status}</td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => updateStatus(c._id, "in-progress")}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  In-Progress
                </button>
                <button
                  onClick={() => updateStatus(c._id, "resolved")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
