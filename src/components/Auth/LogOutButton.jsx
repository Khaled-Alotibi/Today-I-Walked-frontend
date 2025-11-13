import React from "react";
import { Link } from "react-router";
import { clearTokens } from "../../lib/auth";

function LogOutButton({ setUser }) {
  function handleLogOut() {
    clearTokens();
    setUser(null);
  }
  return (
    <div>
      <Link
        to="/Login"
        onClick={handleLogOut}
        className="text-amber-100 rounded p-1 sm:p-2 px-1 sm:px-2 mx-1 sm:mx-2 bg-orange-500 hover:text-gray-300 text-sm sm:text-base"
      >
        Log Out
      </Link>
    </div>
  );
}

export default LogOutButton;
