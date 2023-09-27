import axios from 'axios';
import React, { useState } from 'react';
import { logo, highrise } from '../assets';
import './SignUp.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(60, 74, 131, 0.7), rgba(60, 74, 131, 0.7)), url(${highrise})`, // Set the background image and apply the specified color using linear-gradient
    backgroundSize: 'cover', // Optional: Cover the entire element
    backgroundPosition: 'center', // Optional: Center the background image
    position: 'relative', // Required for overlay
  };

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    confirm: ""
  })

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios.post(`http://localhost:8080/api/register`, { user })
      .then(data => {
        console.log(response.data)
        navigate('/')
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
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
        <div className="bg-white max-w-xl p-4 rounded-xl text-center w-3/4 mx-4">
          <img src={logo} alt="Company Logo" className="w-24 h-24 mx-auto" />
          <hr className="my-4" />
          <h2 className="text-2xl font-bold">Welcome!</h2>
          <p className="text-gray-600">To continue, sign up for Propfolio</p>
          <hr className="my-4" />
          <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
            <div className="w-full mx-auto">
              <div className="my-2">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name*"
                  className="border rounded p-2 w-full"
                  value={user.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name*"
                  className="border rounded p-2 w-full"
                  value={user.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Username*"
                  className="border rounded p-2 w-full"
                  value={user.user_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address*"
                  className="border rounded p-2 w-full"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password*"
                  className="border rounded p-2 w-full"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  placeholder="Confirm Password*"
                  className="border rounded p-2 w-full"
                  value={user.confirm}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-gray-600 mt-2">
            Have an account? <a href="/signin">Sign In here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
