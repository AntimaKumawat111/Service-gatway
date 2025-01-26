import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <div className="text-center bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to Our Course Platform
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore our courses and start learning today!
        </p>
        <a
          href="/services"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Check Services
        </a>
      </div>
    </div>
  );
};

export default Home;
