import { Link } from "@tanstack/react-router";
import tempLogo from "/vite.svg";

function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={tempLogo} alt="Trail Tribe Logo" className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Trail Tribe
            </span>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link to="/trails" className="hover:underline me-4 md:me-6">
                Explore Trails
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:underline me-4 md:me-6">
                My Favorites
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 lg:my-8" />

        <p className="text-sm text-gray-500 text-center italic mb-4">
          "The journey of a thousand miles begins with a single step." - Lao Tzu
        </p>

        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024
          <Link to="/" className="hover:underline">
            Trail Tribe™
          </Link>
          . No Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
