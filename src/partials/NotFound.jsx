import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">This page is in progress...</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist yet.</p>
      <a href="/" className="bg-blue-600 text-white rounded-full py-3 px-6 hover:bg-blue-700 transition duration-150 ease-in-out">Go back home</a>
    </div>
  );
}

export default NotFound;
