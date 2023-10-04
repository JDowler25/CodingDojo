import React, { useState } from 'react';
import { logo } from '../assets'; // Make sure to replace with the actual path

const SideNavBar = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-w-fit flex-none overflow-y-auto h-screen bg-sidebar-bg">
      <div className="flex flex-col items-center py-4">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="w-28 h-28 mx-auto mb-4" />

        {/* Separator Line */}
        <hr className="border-t border-hr-color w-full mb-4" />

        {/* Create New Button */}
        <button
          className="py-2 px-4 mb-4 w-3/4 rounded-3xl shadow-lg bg-button-green text-white text-sm"
        >
          + Create New
        </button>

        {/* Separator Line */}
        <hr className="border-t border-hr-color w-full mb-4" />

        {/* Navigation Tabs */}
        <nav className="mt-4 w-full">
          <ul className="list-none">
            {['Overview', 'Properties', 'Settings'].map((item) => (
              <li
                key={item}
                className={`mb-2 py-2 px-4 cursor-pointer rounded-3xl text-center transition-colors duration-200 w-3/4 mx-auto ${
                  activeTab === item ? 'bg-white text-sidebar-bg' : 'text-text-color hover:bg-white hover:text-sidebar-bg'
                }`}
                onClick={() => setActiveTab(item)}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
