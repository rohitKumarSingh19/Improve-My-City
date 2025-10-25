import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import ComplaintCard from "../components/ComplaintCard";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get("/complaints/my");
      setComplaints(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        My Complaints
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complaints.map((c) => (
          <ComplaintCard key={c._id} complaint={c} />
        ))}
      </div>
    </div>
  );
};

export default MyComplaints;
