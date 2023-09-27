import React from 'react';
import { logo, highrise } from '../assets';
import './SignIn.css'; // Import the CSS file

function SignIn() {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(60, 74, 131, 0.7), rgba(60, 74, 131, 0.7)), url(${highrise})`, // Set the background image and apply the specified color using linear-gradient
    backgroundSize: 'cover', // Optional: Cover the entire element
    backgroundPosition: 'center', // Optional: Center the background image
    position: 'relative', // Required for overlay
  };
  
  

  return (
    <div className="flex h-screen w-screen columns-2" style={backgroundImageStyle}>
      <div className="w-3/6 flex justify-center items-center">
        <div className="max-w-full h-40vh flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold pb-2 text-white">Need a tutorial?</h1>
          <h2 className="text-2xl pb-4 text-white">Click below to schedule a demo!</h2>
          <hr className="w-1/2 border-t border-pink-500 my-4" />
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
            Request Demo
          </button>
        </div>
      </div>
      <div className="w-3/6 flex justify-center items-center">
        <div className="bg-white max-w-screen p-6 rounded-xl text-center">
          <img src={logo} alt="Company Logo" className="w-32 h-32 mx-auto" />
          <hr className="my-4" />
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="text-gray-600">To continue, log in to Propfolio</p>
          <hr className="my-4" />
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded p-2 my-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded p-2 my-2 w-full"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
            Sign In
          </button>
          <p className="text-gray-600 mt-2">
            Don't have an account? <a href="/signup">Sign Up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
