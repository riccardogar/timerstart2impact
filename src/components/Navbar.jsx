import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiMeditation } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", text: "Home" },
    { to: "/resources", text: "Resources" },
    { to: "/contacts", text: "Contacts" },
  ];

  return (
    <nav className="w-full bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <GiMeditation className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]" />{" "}
            </Link>
            <h3 className="ml-3 text-2xl lg:text-3xl text-white">Timer</h3>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-lg lg:text-xl font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/login"
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-lg lg:text-xl font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-4 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-lg lg:text-xl font-medium"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="border-y-2 border-blue-600 px-2 pt-2 pb-3 space-y-1 flex flex-col items-center sm:px-3">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-lg lg:text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-blue-600">
            <div className="flex flex-row justify-center items-center px-5">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
