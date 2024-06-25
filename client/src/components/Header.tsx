import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-300 shadow-md h-[5rem]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h2 className="text-3xl font-bold">Automaton</h2>
        <ul className="flex space-x-4 h-[4rem] p-4">
          <li className="hover:text-gray-700 text-xl">Features</li>
          <li className="hover:text-gray-700 text-xl">Pricing</li>
          <li className="hover:text-gray-700 text-xl">Resources</li>
          <li className="hover:text-gray-700 text-xl">Integrations</li>
        </ul>
        <div className="space-x-4">
          <button
            type="button"
            className="py-2 px-4 bg-transparent border border-gray-400 rounded hover:bg-gray-100"
          >
            Sign In
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try For Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
