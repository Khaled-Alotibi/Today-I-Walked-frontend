import { Link } from "react-router";
import LogOutButton from "./Auth/LogOutButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sm:w-12/12 shadow-lg fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-gray-950/50 px-1">
      <div className="mx-auto px-2 sm:px-3 py-2 sm:py-3 flex items-center relative shadow-2xs">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-amber-500 whitespace-nowrap">
          <Link to="/">Today I Walked</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 md:gap-6 text-amber-500 text-sm md:text-base">
          <li>
            <Link to="/Feed" className="hover:text-amber-100">
              Feed
            </Link>
          </li>
          <li>
            <Link to="/Leaderboard" className="hover:text-amber-100">
              Leaderboard
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                to={`/Profile/${user.user_id}`}
                className="hover:text-amber-100"
              >
                Profile
              </Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to="/AboutUs" className="hover:text-amber-100">
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden ml-auto text-amber-500 hover:text-amber-100"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Auth Buttons */}
        <div className="ml-auto pr-1 sm:pr-3 hidden sm:flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Link to="/Login" className="text-amber-500 hover:text-amber-100 text-sm md:text-base">
                Login
              </Link>
              <Link
                to="/Signup"
                className="text-amber-100 rounded p-1 sm:p-2 px-1 sm:px-2 mx-1 sm:mx-2 bg-orange-500 hover:text-gray-300 text-sm md:text-base"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gray-950/95 border-t border-orange-500/50 shadow-lg">
          <ul className="flex flex-col py-2">
            <li>
              <Link
                to="/Feed"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-amber-500 hover:text-amber-100 hover:bg-gray-900/50"
              >
                Feed
              </Link>
            </li>
            <li>
              <Link
                to="/Leaderboard"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-amber-500 hover:text-amber-100 hover:bg-gray-900/50"
              >
                Leaderboard
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  to={`/Profile/${user.user_id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-amber-500 hover:text-amber-100 hover:bg-gray-900/50"
                >
                  Profile
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link
                to="/AboutUs"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-amber-500 hover:text-amber-100 hover:bg-gray-900/50"
              >
                About Us
              </Link>
            </li>
            <li className="border-t border-orange-500/50 mt-2 pt-2">
              {user ? (
                <div className="px-4 py-2">
                  <LogOutButton />
                </div>
              ) : (
                <div className="flex flex-col gap-2 px-4 py-2">
                  <Link
                    to="/Login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-amber-500 hover:text-amber-100 text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/Signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-amber-100 rounded p-2 bg-orange-500 hover:text-gray-300 text-center"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
