// import React, { useState } from "react";
// import axiosInstance from "../api/axiosInstance";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axiosInstance.post("/users/register", form);
//     alert("Registration successful!");
//     navigate("/login");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-[80vh]">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold text-blue-600 mb-6">
//           Create Account
//         </h2>

//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
//         />

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
//         />

//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-sm text-gray-500 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Fixed endpoint
      await axiosInstance.post("/auth/register", form);
      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-green-50 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Create Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-600 text-sm p-2 rounded mb-4 text-center">
            {success}
          </div>
        )}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all"
        >
          Register
        </button>

        <p className="mt-5 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
