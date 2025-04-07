import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UploadClothes from "./UploadClothes";
import CreateCombination from "./CreateCombination";
import UploadClothes from "./UploadClothes";
import OutfitGenerator from "./OutfitGenerator";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadClothes />} />
        <Route path="/generate" element={<OutfitGenerator />} />
        <Route path="/upload" element={<UploadClothes />} />
        <Route path="/kombin" element={<CreateCombination />} />
      </Routes>
    </Router>
  );
}

export default App;