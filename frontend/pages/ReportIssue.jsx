import axiosInstance from "../api/axiosInstance";
import { useState } from "react";

const ReportIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const submitIssue = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("image", image);
    await axiosInstance.post("/complaints", formData);
    alert("Complaint submitted!");
  };

  return (
    <form onSubmit={submitIssue}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportIssue;
