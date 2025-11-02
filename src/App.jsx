import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/NavBar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Feed from "./pages/Feed";

import { getUserFromToken } from "./lib/auth";
function App() {
  const [user, setUser] = useState(getUserFromToken());

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Feed" element={<Feed />} />
        {/* <Route path="/Profile" element={<Profile />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
