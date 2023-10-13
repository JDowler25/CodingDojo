import React, { useState, useContext, useEffect } from 'react';
import { helpIcon, accountIcon, searchIcon, settingsIcon, logoutIcon } from '../assets'; // Replace with actual import paths
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';



const Header = ({ userName }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { setUser, user } = useContext(UserContext);
  const [shouldLoad, setShouldLoad] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/signin'); // redirect to sign-in page
  };

  useEffect (()=> {
    if(!user){
      navigate('/')
    } else{
      setShouldLoad(true);
    }
  },[user])
  if(shouldLoad){
    return (
      <div className="w-full h-auto flex flex-col justify-center px-4 bg-white shadow-md">
        {/* Row for Search Bar and Icons */}
        <div className="flex items-center justify-between h-16 ">
          {/* Search Bar */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-full border focus:outline-none"
            />
            <img src={searchIcon} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Help Icon */}
            <img src={helpIcon} alt="Help" className="w-6 h-6 cursor-pointer" />
  
            {/* Profile Dropdown */}
            <div className="relative">
              <img
                src={accountIcon}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              />
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                    <img src={accountIcon} alt="Profile" className="w-4 h-4 mr-2" />
                    Profile
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                    <img src={settingsIcon} alt="Settings" className="w-4 h-4 mr-2" />
                    Settings
                  </div>
                  <div
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout} // handle logout on click
                  >
                    <img src={logoutIcon} alt="Logout" className="w-4 h-4 mr-2" />
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* User Greeting */}
        <div className="mt-2 text-gray-700 text-3xl font-semibold pb-2">
          Hi, <span className="text-blue-500">Jaydan</span>! Welcome back!
        </div>
      </div>
    );
  }
  else{
    return null;
  }
};

export default Header;
