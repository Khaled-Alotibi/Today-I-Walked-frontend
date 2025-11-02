import DarkVeil from "@/components/DarkVeil";
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
      await axios.post("http://127.0.0.1:8000/api/signup/", {
        username,
        password,
        email,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <DarkVeil hueShift={231} />
      </div>
      <div className="bg-stone-900/80 p-8 rounded w-6/12 shadow-lg">
        <h1 className="text-2xl font-semibold text-amber-100 mb-6 text-center">
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
