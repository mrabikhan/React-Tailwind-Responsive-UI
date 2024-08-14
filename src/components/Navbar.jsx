import React, {useState} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import logo from '../assets/logo.png'
function Navbar() {

const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};
  
return (
<div className="relative w-full border-b-2 border-gray-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
    <span><img src={logo} className='w-12 h-12'/></span>
      <span className="font-bold">Cake Stories</span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
        <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:border-b-2 border-black duration-75"
          >
          <NavLink to="/" className={({ isActive }) => `duration-200 border-black ${isActive ? "border-b-2" : "border-b-0"}`}>
            Home          
          </NavLink>
          </a>
        </li>

        <li className="relative" onClick={toggleDropdown}>
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:border-b-2 border-black duration-75
                cursor-pointer">
              <span className='inline-flex'>
              <NavLink to="/product" className={({ isActive }) => `duration-200 border-black ${isActive ? "border-b-2" : "border-b-0"}`}>
                Products
              </NavLink>
              <svg
                xmlns = "http://www.w3.org/2000/svg"
                width = "24"
                height = "24"
                viewBox = "0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width = "2"
                stroke-linecap = "round"
                stroke-linejoin = "round"
                class = "ml-2 h-4 w-4"
              >
             <polyline points = "6 9 12 15 18 9"></polyline>
              </svg>
            </span>
              </a>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800
                       hover:bg-gray-100 border-b-2 border-gray-400"
                    >    
                    Cup Cakes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800
                    hover:bg-gray-100 border-b-2 border-gray-400"
                    >
                    Birthday Cakes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800
                       hover:bg-gray-100 border-b-2 border-gray-400"
                    >
                    Muffins
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800
                       hover:bg-gray-100 "
                    >
                    Premium Cakes
                    </a>
                  </li>
                </ul>
              )}
            </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:border-b-2 border-black duration-75"
          >
          <NavLink to="/about" className={({isActive})=>`duration-200 border-black ${isActive ? "border-b-2" : "border-b-0"}`}>
            About
          </NavLink>

          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:border-b-2 border-black duration-75"
          >
          <NavLink to="/contact" className={({isActive}) => `duration-200 border-black ${isActive ? "border-b-2" : "border-b-0"}`}>
            Contact
          </NavLink>
          </a>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
     <Link to="/signin">
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Sign In
      </button>
      </Link>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

  )
}

export default Navbar