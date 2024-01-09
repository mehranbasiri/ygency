import "./App.css";
import Web_development from "./HomePage/Web_development";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Web_development />} />
      </Routes>
    </div>
  );
}

export default App;
