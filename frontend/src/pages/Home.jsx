import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Welcome to Improve My City 🏙️
      </h1>
      <p className="text-gray-600 max-w-2xl mb-6">
        Report issues like potholes, garbage, streetlight failures, or any civic
        problem in your neighborhood.
      </p>
      <Link
        to="/report"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Report an Issue
      </Link>
    </section>
  );
};

export default Home;
