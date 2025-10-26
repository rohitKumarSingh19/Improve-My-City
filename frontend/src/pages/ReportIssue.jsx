
import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const ReportIssue = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/complaints", form);
      alert("Issue reported successfully!");
      setForm({ title: "", description: "", location: "" });
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("Failed to report issue. Please log in again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Report an Issue
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Issue Title"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the issue..."
          className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 h-32"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;
