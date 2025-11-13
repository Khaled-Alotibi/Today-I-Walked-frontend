import DarkVeil from "@/components/DarkVeil";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://today-i-walked-backend-production.up.railway.app/api/signup/",
        {
          username,
          password,
          email,
        },
      );
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-stone-900/80 p-4 sm:p-6 md:p-8 rounded w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-lg">
        <h1 className="text-xl sm:text-2xl font-semibold text-amber-100 mb-4 sm:mb-6 text-center">
          Signup a new account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-amber-100">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 bg-stone-700 text-amber-100 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm text-amber-100">Username</label>
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 bg-stone-700 text-amber-100 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm text-amber-100">Password</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 bg-stone-700 text-amber-100 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 transition text-amber-100 py-2 rounded-lg font-medium"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-4">
          Do you have an account?{" "}
          <Link to="/Login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
