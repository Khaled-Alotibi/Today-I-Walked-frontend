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
function App() {
  const [user, setUser] = useState(getUserFromToken());
  return (
    <Router>
      <div className="absolute inset-0 -z-10">
        <DarkVeil hueShift={231} />
      </div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Feed" element={<Feed user={user} />} />
        <Route path="/Profile/:id" element={<Profile user={user} />} />
        <Route path="/Leaderboard" element={<Leaderboard user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
