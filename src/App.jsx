import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
