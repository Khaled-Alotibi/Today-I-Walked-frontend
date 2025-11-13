import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/NavBar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Feed from "./pages/Feed";
import Profile from "@/components/Profile";
import Leaderboard from "./pages/Leaderboard";
import DarkVeil from "./components/DarkVeil";

import { getUserFromToken } from "./lib/auth";
import AboutUs from "./pages/AboutUs";
function App() {
  const [user, setUser] = useState(getUserFromToken());
  return (
    <Router>
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <DarkVeil hueShift={231} />
      </div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Feed" element={<Feed user={user} />} />
        <Route
          path="/Profile/:id"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route path="/Leaderboard" element={<Leaderboard user={user} />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
