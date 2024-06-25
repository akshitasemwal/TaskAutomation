import React from "react";

const Home = () => {
  return (
    <div className="items-center max-w-6xl mx-auto p-3">
      <h1 className="text-4xl">Your one stop destination!</h1>
      <button
        type="button"
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Use Google
      </button>
      <button
        type="button"
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Use Outlook
      </button>
    </div>
  );
};

export default Home;
