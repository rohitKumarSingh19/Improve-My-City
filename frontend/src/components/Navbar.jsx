import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Improve My City
        </Link>

        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/report" className="hover:text-blue-200">
            Report
          </Link>
          <Link to="/my-complaints" className="hover:text-blue-200">
            My Complaints
          </Link>
          <Link to="/resolved" className="hover:text-blue-200">
            Resolved
          </Link>
          {user?.isAdmin && (
            <Link to="/admin" className="hover:text-blue-200">
              Admin
            </Link>
          )}
          {user ? (
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
