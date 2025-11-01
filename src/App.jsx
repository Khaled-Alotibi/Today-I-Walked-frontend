import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Navbar from "./components/NavBar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
