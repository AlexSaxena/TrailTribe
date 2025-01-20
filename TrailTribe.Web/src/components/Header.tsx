// Header.tsx
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "/Logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Trail Tribe Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Trail Tribe</h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            activeProps={{ className: "underline" }}
            activeOptions={{ exact: true }}
            className="hover:text-secondary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/trails"
            activeProps={{ className: "underline" }}
            className="hover:text-secondary transition-colors duration-300"
          >
            Trails
          </Link>
          <Link
            to="/favorites"
            activeProps={{ className: "underline" }}
            className="hover:text-secondary transition-colors duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/profile"
            activeProps={{ className: "underline" }}
            className="hover:text-secondary transition-colors duration-300"
          >
            Profile
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden hover:text-secondary transition-colors duration-300"
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

      {isMenuOpen && (
        <nav className="block md:hidden bg-primary text-white shadow-md">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 px-6 hover:text-secondary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/trails"
            onClick={closeMenu}
            className="block py-2 px-6 hover:text-secondary transition-colors duration-300"
          >
            Trails
          </Link>
          <Link
            to="/favorites"
            onClick={closeMenu}
            className="block py-2 px-6 hover:text-secondary transition-colors duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/profile"
            onClick={closeMenu}
            className="block py-2 px-6 hover:text-secondary transition-colors duration-300"
          >
            Profile
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
