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
        className="text-amber-100 rounded p-2 px-2 mx-2 bg-orange-500 hover:text-gray-300"
      >
        Log Out
      </Link>
    </div>
  );
}

export default LogOutButton;
