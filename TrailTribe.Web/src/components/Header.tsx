import { useState } from "react";
import { Link } from "@tanstack/react-router";
import tempLogo from "/vite.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={tempLogo} alt="Trail Tribe Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gray-800">Trail Tribe</h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            activeProps={{ className: "font-bold underline" }}
            activeOptions={{ exact: true }}
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/trails"
            activeProps={{ className: "font-bold underline" }}
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Trails
          </Link>
          <Link
            to="/favorites"
            activeProps={{ className: "font-bold underline" }}
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/profile"
            activeProps={{ className: "font-bold underline" }}
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Profile
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-green-600 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      {isMenuOpen && (
        <nav className="block md:hidden bg-white shadow-md">
          <Link
            to="/"
            onClick={closeMenu}
            activeProps={{ className: "font-bold underline" }}
            activeOptions={{ exact: true }}
            className="block py-2 px-6 text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/trails"
            onClick={closeMenu}
            activeProps={{ className: "font-bold underline" }}
            className="block py-2 px-6 text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Trails
          </Link>
          <Link
            to="/favorites"
            onClick={closeMenu}
            activeProps={{ className: "font-bold underline" }}
            className="block py-2 px-6 text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/profile"
            onClick={closeMenu}
            activeProps={{ className: "font-bold underline" }}
            className="block py-2 px-6 text-gray-600 hover:text-green-600 transition-colors duration-300"
          >
            Profile
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
