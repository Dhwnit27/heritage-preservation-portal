import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ExplorePage from "./pages/ExplorePage";
import MonumentPage from "./pages/MonumentPage";
import AsiaPage from "./pages/AsiaPage";
import IndiaPage from "./pages/IndiaPage";
import TajMahalPage from "./pages/TajMahalPage";
import RedFortPage from "./pages/RedFortPage";

import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/explore" element={<ExplorePage />} />
  <Route path="/monuments" element={<MonumentPage />} />
  <Route path="/asia" element={<AsiaPage />} />
  <Route path="/india" element={<IndiaPage />} />
  <Route path="/taj-mahal" element={<TajMahalPage />} />
  <Route path="/red-fort" element={<RedFortPage />} />
</Routes>
  );
}

export default App;