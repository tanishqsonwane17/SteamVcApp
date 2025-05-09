import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Stream VC App</h1>
      <p className="text-lg text-gray-600 mb-8">Create or join a video call room in seconds.</p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
