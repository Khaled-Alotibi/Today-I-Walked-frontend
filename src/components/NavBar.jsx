import { Link } from "react-router";
import LogOutButton from "./Auth/LogOutButton";

function Navbar({ user, setUser }) {
  return (
    <nav className="w-12/12 shadow-lg fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-gray-950/25 px-1">
      <div className="mx-autu px-3 py-3 flex items-center relative shadow-2xs">
        <h1 className="text-xl font-semibold text-amber-500">
          <Link to="/">Today I Walked</Link>
        </h1>

        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 text-amber-500">
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
              <Link to="/Profile" className="hover:text-amber-100">
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

        <div className="ml-auto pr-3">
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Link to="/Login" className="text-amber-500 hover:text-amber-100">
                Login
              </Link>
              <Link
                to="/Signup"
                className="text-amber-100 rounded p-2 px-2 mx-2 bg-orange-500 hover:text-gray-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
